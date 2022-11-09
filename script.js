
function Nom_Random(){
    let listGrpSimplon = ['Terry','Sokunthy','Sandrine','Kevin',
'Johann','Jessie','Jean-Sebastien','Jean-François','Jean-Christophe',
'Arnaud','Stéphane','Alexandre','Delphine','Laure','Pierre','Sebastien'];

    let nbRandom = Math.floor(Math.random(15)*10);
    
        //alert(listGrpSimplon[nbRandom]);
    document.getElementById('btnRandom').onclick = function(){
            this.value = listGrpSimplon[nbRandom]
        }
        setTimeout(document.getElementById('btnRandom').reset(),3000);
}



//setTimeout(clearTimeout(Nom_Random),3000,document.getElementById('btnRandom').reset());
