

function Nom_Random(){
    let listGrpSimplon = ['Terry','Sokunthy','Sandrine','Kevin',
'Johann','Jessie','Jean-Sebastien','Jean-François','Jean-Christophe',
'Arnaud','Stéphane','Alexandre','Delphine','Laure','Pierre','Sebastien'];

    const btnInit = document.getElementById('btnRandom').value;

    let nbRandom = Math.floor(Math.random(15)*10);
    
        //alert(listGrpSimplon[nbRandom]);
    let btn = document.getElementById('btnRandom');

    function initBtn(){
        document.getElementById('btnRandom').reset();
        return;
    }
    
    
    btn.addEventListener('click',grpName3sec);
    
    function grpName3sec(){
        this.value = listGrpSimplon[nbRandom];
        return;
        }
    function oubli3(){
        btn.value = btnInit;
        return;
    }
    setTimeout(oubli3,3000);
}



//setTimeout(clearTimeout(Nom_Random),3000,document.getElementById('btnRandom').reset());
