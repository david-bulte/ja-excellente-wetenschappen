deploy op firebase
------------------

ng build --prod
mv dist/* firebase/public
cd firebase
firebase deploy --only hosting

testimonials toevoegen/bewerken/deleten
---------------------------------------

ga naar https://wetenschapismvx.be/admin
login met kristien.hens@gmail.com en <paswoord>

=> je ziet nu alle testimonials in de database
(er is nog niet te zien of ze gepubliceerd zijn, kan later toegevoegd worden)

=> klik delete om te verwijderen, edit opent een edit scherm

=> in het edit scherm kan je bij "status" aangeven of een testimonial publiek is of niet:
    1 = publiek
    0 = niet publiek
    (wanneer een gebruiker een testimonial heeft ingegeven zal deze standaard op "niet publiek"
     staan)
    (er is momenteel nog geen mail notificatie wanneer iemand een testimonial toevoegt -
     kan ook later nog worden toegevoegd)
