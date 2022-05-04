const url = $request.url;
const body = url === '/region'
  ? 'OK'
  : $response.body

$done({ body })
