function seRompe(){
    return 3+z;
}

function seRompeAsincrona(cb){
    setTimeout(function (){
        try {
            return 3+z;
        } catch (error) {
            console.log(error)
            cb(error);
        }
    })
}


try {
    // seRompe();
    seRompeAsincrona(function(){
        console.log('Hay error');
    });
} catch (error) {
    console.log('Vaya, algo se ha roto');
    console.log(error);
}