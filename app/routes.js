module.exports = function(app, streams) {

  // GET home 
    const index = function (req, res) {
        res.render('index', {
            title: 'Project RTC',
            header: 'WebRTC live streaming',
            username: 'Username',
            share: 'Share this link',
            footer: 'pierre@chabardes.net',
            id: req.params.id
        });
    };

    // GET streams as JSON
    const displayStreams = function (req, res) {
        const streamList = streams.getStreams();
        // JSON exploit to clone streamList.public
        const data = (JSON.parse(JSON.stringify(streamList)));
        res.status(200).json(data);
    };

    app.get('/streams.json', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
};