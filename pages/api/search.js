/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ results: [] }))

}