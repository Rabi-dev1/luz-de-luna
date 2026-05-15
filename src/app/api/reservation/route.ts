import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, persons, date, time, notes, _trap } = data

    // Honeypot: bots fill this hidden field, humans don't
    if (_trap) return NextResponse.json({ ok: true })

    if (!name || !email || !date || !time) {
      return NextResponse.json({ ok: false, error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const formatDate = (d: string) => {
      const [y, m, day] = d.split('-')
      return `${day}.${m}.${y}`
    }

    const html = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F5F1EB;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F1EB;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#FFFFFF;max-width:580px;">

        <!-- Header -->
        <tr>
          <td style="background:#14120E;padding:36px 40px;text-align:center;">
            <p style="margin:0;font-size:24px;color:#C5A17F;letter-spacing:0.08em;">LUZ DE LUNA</p>
            <p style="margin:6px 0 0;font-size:10px;color:#FAF8F4;letter-spacing:0.3em;text-transform:uppercase;opacity:0.4;">Restaurant & Café · Hannover</p>
          </td>
        </tr>

        <!-- Title -->
        <tr>
          <td style="padding:32px 40px 8px;border-bottom:1px solid #E8E2D9;">
            <p style="margin:0;font-size:11px;color:#C5A17F;letter-spacing:0.3em;text-transform:uppercase;">Neue Reservierungsanfrage</p>
            <h1 style="margin:8px 0 0;font-size:22px;color:#14120E;font-weight:400;">${name}</h1>
          </td>
        </tr>

        <!-- Key info highlight -->
        <tr>
          <td style="padding:24px 40px;background:#FAF8F4;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="text-align:center;padding:0 12px;">
                  <p style="margin:0;font-size:10px;color:#6B6560;letter-spacing:0.2em;text-transform:uppercase;">Datum</p>
                  <p style="margin:6px 0 0;font-size:20px;color:#C5A17F;">${formatDate(date)}</p>
                </td>
                <td style="text-align:center;padding:0 12px;border-left:1px solid #D4C9B8;border-right:1px solid #D4C9B8;">
                  <p style="margin:0;font-size:10px;color:#6B6560;letter-spacing:0.2em;text-transform:uppercase;">Uhrzeit</p>
                  <p style="margin:6px 0 0;font-size:20px;color:#C5A17F;">${time} Uhr</p>
                </td>
                <td style="text-align:center;padding:0 12px;">
                  <p style="margin:0;font-size:10px;color:#6B6560;letter-spacing:0.2em;text-transform:uppercase;">Personen</p>
                  <p style="margin:6px 0 0;font-size:20px;color:#C5A17F;">${persons}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Contact details -->
        <tr>
          <td style="padding:24px 40px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2D9;width:38%;">
                  <p style="margin:0;font-size:10px;color:#6B6560;letter-spacing:0.15em;text-transform:uppercase;">E-Mail</p>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2D9;">
                  <a href="mailto:${email}" style="color:#14120E;text-decoration:none;font-size:14px;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2D9;">
                  <p style="margin:0;font-size:10px;color:#6B6560;letter-spacing:0.15em;text-transform:uppercase;">Telefon</p>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2D9;">
                  <p style="margin:0;font-size:14px;color:#14120E;">${phone}</p>
                </td>
              </tr>` : ''}
              ${notes ? `
              <tr>
                <td style="padding:12px 0 0;vertical-align:top;">
                  <p style="margin:0;font-size:10px;color:#6B6560;letter-spacing:0.15em;text-transform:uppercase;">Wünsche</p>
                </td>
                <td style="padding:12px 0 0;">
                  <p style="margin:0;font-size:14px;color:#14120E;line-height:1.7;">${notes}</p>
                </td>
              </tr>` : ''}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:28px 40px;background:#14120E;text-align:center;">
            <p style="margin:0;font-size:10px;color:#FAF8F4;opacity:0.35;letter-spacing:0.12em;">
              Falkenstraße 22A · 30449 Hannover · +49 511 12345
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    await resend.emails.send({
      from: 'reservierung@luz-de-luna.info',
      to: 'luzdeluna@web.de',
      replyTo: email,
      subject: `Reservierung: ${name} — ${formatDate(date)} · ${time} Uhr · ${persons} Pers.`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Reservation email error:', err)
    return NextResponse.json(
      { ok: false, error: 'E-Mail konnte nicht gesendet werden.' },
      { status: 500 },
    )
  }
}
