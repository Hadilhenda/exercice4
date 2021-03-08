/**
 * 
 */
function verif(f1){
	ch= f1.nom.value;
	ch0= f1.pass.value;
ch1= ch.charAt(0)+ch.charAt(1)+ch0.charAt(2);
ch2=ch0.charAt(3)+ch0.charAt(4)+ch0.charAt(5);
if((ch1!='dsi'))
{
   alert ('Authentification ressuie');
   return false;
} 
if((ch2!='dsi'))
{
   alert ('Authentification ressuie');
   return false;

}
}