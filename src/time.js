import moment from 'moment'
import 'moment-timezone'

export async function handleRequest(request) {
  const time = moment(new Date)
  const url = new URL(request.url)
  let timeMin
  let timeMax
  let timezone = url.searchParams.get("tz")
  if (!timezone) {
    timezone = "America/Los_Angeles"
  }
  let calendar = url.searchParams.get("calendar")
   if (!calendar) {
    calendar = "whitman.edu_84adp395fp9ep82m84os5713ic@group.calendar.google.com"
  }
  let singleEvents = url.searchParams.get("singleEvents")
  if (!singleEvents) {
    singleEvents = "true"
  }
  let timestring = url.searchParams.get("timeMin")
  let timelocalcustom = moment(timestring)
  if (timelocalcustom.isValid()) {
    timeMin = timelocalcustom.tz(timezone).format()
    timelocalcustom.add('1', 'minutes')
    timeMax = timelocalcustom.tz(timezone).format()
  }else{
    timeMin = time.tz(timezone).format()
    time.add('1', 'minutes')
    timeMax = time.tz(timezone).format()
  }
  let sourceurl = "https://www.googleapis.com/calendar/v3/calendars/"
  let urlsuffix = "/events?showDeleted=false&"
  let apikey = ""
  let response = await fetch (sourceurl+calendar+urlsuffix+"timeMin="+ timeMin +"&timeMax=" + timeMax + "&singleEvents="+singleEvents+"&key="+apikey)

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      'Access-Control-Allow-Origin':'*',
      'cache-control': 'max-age=60',
      'content-type': 'application/json; charset=utf-8',
      'X-Powered-By': 'Penrose Library - Cloudflare Workers'
    }
  })

}

