const http = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, {
        'content-type' : 'text/html; charset=utf8'
    })

    //แบบ setHeader
    // res.statusCode = 200
    // res.setHeader('content-type', 'text/html')
    
    if(req.url === '/') {
        res.write('<h${i}>This is Home page</h${i}>')
        for (i=1; i<7; i++) 
            res.write(`<h${i}>ครั้งที่ ${i} </h${i}>`)
        return res.end()
    }
    if(req.url === '/user') {
        res.write('<h2>This is User page</h2>')
        return res.end()
    }
    if(req.url === '/page1') {
        res.write(`
        <!DOCTYPE html>
        <html>
        <body style="background-color:tomato;">

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

        </body>
        </html>
        `)
        return res.end()
    }

    function form(req, res){
        res.write(`
        <!DOCTYPE html>
        <html>
        <body>

        <h2>ใส่ Text input fields</h2>

        <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
        </form>

        <p>Note that the form itself is not visible.</p>

        <p>Also note that the default width of text input fields is 20 characters.</p>

        </body>
        </html>
        `)  
    }

    if (req.url === '/form') {
        return form(req, res)
    }
        // ถ้า/อย่างอื่น
    res.writeHead(404,'Not Found in our site..',{
        'content-type' : 'text/html'
    })

    //แบบ setHeader
    // res.statusCode = 404
    // res.statusMessage = 'Not found in our site..'
    // res.setHeader('contype-type', 'text/html')
    // res.write(res.statusMessage)

    res.end('<hr><h3>Not Found</h3><hr>')

}).listen(8080, () => console.log('Server start...'))