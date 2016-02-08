var fs = require('fs');




module.exports.findSentence = function(pathSrc, pathDest){
    var buf = fs.readFileSync(pathSrc, "utf8");
    //console.log(buf);
    var res = [];
    var lastIndex = 0;
    for(var i=0; i < buf.length; ++i){
        if(buf[i] == '.' || buf[i] == '?' || buf[i] == '!'){
            var tmpSentence = buf.substring(lastIndex, ++i);
            lastIndex = i;
            var lastSentenceInex = 0;
            var sentence = '';
            var nbWords = 0;
            for(var j=0; j < tmpSentence.length; ++j){
                if(tmpSentence[j] == ' ' && j-lastSentenceInex > 2) {
                    nbWords++;
                }
                else if(tmpSentence[j] == '\n'){
                    if(j-lastSentenceInex > 2){
                        nbWords++;
                    }
                    sentence += tmpSentence.substring(lastSentenceInex, j++)+' ';
                    lastSentenceInex = j;
                }

            }
            sentence += tmpSentence.substring(lastSentenceInex);
            res.push({words: nbWords, s: sentence});
        }
    }

    fs.writeFile(pathDest+'/sentences.json', JSON.stringify(res), (err) => {
        if(err) throw err;
        console.log('Okey');
    });
};

