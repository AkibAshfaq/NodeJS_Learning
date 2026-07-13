const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleGenShortURL(req, res) {
    const { url } = req.body;
    const shortId = nanoid(8);
    
    if ( !url ) return res.status(400).json({ Url : 'not available'});

    await URL.create({ 
        shortId: shortId, 
        redirectUrl: url,
        visithistory: []
    });

    return res.json({ id : shortId });
}

async function handleGeturl(req, res){
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visithistory: {
                    timestamp : Date.now()
                },
            }
        }   
    );

    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    return res.redirect(entry.redirectUrl);
    
}

async function handleDelete(req, res){
    const shortId = req.params.shortId;
    await URL.findOneAndDelete({ shortId });

    return res.status(200).json({ url : 'Deleted the link' })
}

async function handleGetAllurl(req, res) {
    const allurl = await URL.find({});
    return res.json(allurl);
}

module.exports = { 
    handleGetAllurl,
    handleGenShortURL, 
    handleGeturl,
    handleDelete,
};