

const renderMe = JSON.parse( localStorage.getItem( 'renderme' ) );

function renderElement (){
  document.getElementById('3').setAttribute('src',renderMe.imagePath);
  document.getElementById('1').innerHTML= renderMe.name;
  document.getElementById('4').setAttribute('src',renderMe.map);

  if( renderMe.catogery ){

    document.getElementById('2').innerHTML= renderMe.catogery;
    
  }else{

    document.getElementById('2').innerHTML= '';
  }

}
renderElement ();