{
    self.oninstall = function() {
        caches.open('BondenTing')
        .then( function (cache) {
            cache.addAll ([
                '/',
                'index.html'
            ])
            .then( function(){
                console.log('cachea!!');
            })
            .catch( function(err) {
                console.log('Feil: ', err);
            })
        })
    }

    self.onactivate = function () {
        console.log('aktivert');
    }

    self.onfetch = function (event) {
        event.respondWidth(
            caches.match(event.request)
            .then(function(response) {
                if(response) {
                    return response;
                } else {
                    return fetch(event.request);
                }
            })
        )
    }
}