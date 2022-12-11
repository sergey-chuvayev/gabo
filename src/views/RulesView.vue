<script setup lang="ts">
import ArticleArea from '../components/ArticleArea.vue';
</script>

<template>
  <ArticleArea>
    <div class="app_container__block">
      <!-- TODO ici trop de texte > faire un sous menu -->

      <div>
        <span class="subtitle">Matériel:</span> un jeu de 52 cartes. <br />
        <span class="subtitle">Ages des joueurs:</span> de 16 à 106 ans. <br />
        <span class="subtitle">Nombre de joueurs:</span> 3 à 8 joueurs. <br />
        <span class="subtitle">Conditions météorologiques:</span> Bonne
        luminosité, peu de vent, pas de pluie. <br />
        <span class="subtitle">Accessoires / Bonus:</span> Au choix, bière,
        Ricard, Suz’To’. <br />
      </div>
      <div>
        <span class="subtitle">Préambule :</span>
        La volonté d’établir un Règlement Officiel du Gabo procède d’un constat
        simple : il n’existe aucun consensus quant aux règles du jeu. Son nom
        lui-même ne fait pas l’unanimité ! On parle ici de Guelsch, là de
        Tamalou, voire de Dutch… Cette diversité de règles et d’appellations
        nuit au Gabo et à son expansion. Elle sème la confusion parmi des
        joueurs, pourtant volontaires, et ne contribue pas à élargir la base de
        nos membres adhérents et actifs. Tel est le problème auquel
        l’établissement d’une Règle Officielle apporte une solution.
      </div>
      <div>
        <p>
          Pouvant être rattaché à de nombreuses choses – par exemple, à une île
          au large des côtes australiennes qui porte son nom –, il nous semble
          pertinent, pour commencer, de préciser à quoi le terme « Gabo » fait
          d’après nous référence et pourquoi, parmi toutes les dénominations
          évoquées plus haut, c’est à celle-ci que va notre préférence. « Gabo »
          est le surnom d’un homme, celui d’un écrivain colombien célèbre,
          lauréat du prix Nobel de littérature en 1982, dont l’œuvre la plus
          connue est Cent ans de Solitude : Gabriel García Márquez.
        </p>
        <p>
          Penchons-nous davantage sur l’engagement politique de « Gabo » qui
          nous intéresse au premier chef. Dans son ouvrage García Márquez : The
          Man and His Work, Gene H. Bell-Villada, l’un de ses biographes,
          précise : « De la même façon que sa carrière d'écrivain s'est
          construite à ses débuts par une opposition assumée au statu quo
          littéraire colombien, les opinions socialistes et anti- impérialistes
          de García Márquez se sont construites en opposition au statu quo
          global dominé par les États-Unis ».
        </p>
        <p>
          C’est donc comme révolutionnaire que « Gabo» s’est illustré au côté,
          entre autres, de Fidel Castro et de Régis Debray. Pour défendre la
          cause qui lui paraît juste, celle de la Révolution et de la liberté,
          il n’hésite pas à mettre la main au portefeuille. C’est ainsi qu’en
          1972, lorsqu’il reçoit le prix international de littérature Rómulo
          Gallegos, il donne l’intégralité de l’argent reçu avec ce prix au
          parti vénézuélien Movimiento al Socialismo (« Mouvement vers le
          socialisme »). Ce geste n’aura pas manqué de susciter de nombreuses
          critiques (bien que l'argent en question n’aura servi qu’au
          financement du magazine politique du MAS et non à sa guérilla); quant
          à nous, nous préférons y voir le signe d’un engagement sans faille et
          d’une générosité sans réserve.
        </p>
        <p>
          De sources sûres, nous savons que Gabriel Garcia Marquez fût un joueur
          de cartes invétéré, notamment avec les révolutionnaires vénézuéliens
          lors de l’écriture de Cent ans de Solitude. A l’évidence, il aurait
          aimé le jeu que nous représentons et dans lequel sont à l’honneur la
          stratégie, la prise de risque et l’amitié - autant de valeurs qui
          comptaient à ses yeux. C’est donc pour s’inscrire dans la filiation de
          cet illustre personnage que l’Amicale du Gabo souhaite officialiser
          l’appellation « Gabo ».
        </p>
        <p>Puissent nos heures de plaisir prise à ce jeu lui rendre hommage!</p>
      </div>
      <div>
        <p>Déroulement d’une partie :</p>
        <p>Le Gabo se déroule en plusieurs manches.</p>
        <p>
          Au fil du jeu, les joueurs accumulent des points, soit à cause des
          cartes qu’ils possèdent encore en main lorsqu’une manche se termine,
          soit en raison de malus qui les accablent, nous y reviendrons. Le but
          du jeu est d’accumuler le moins de points possible au fur et à mesure
          des manches. La partie prend fin lorsque au moins un des joueurs
          dépasse les 100 points. On établit alors un classement qui va du
          joueur ayant le moins de point à celui en ayant le plus ; le gagnant
          étant celui qui en a le moins et le perdant celui qui en a le plus.
          Pour marquer sa défaite, le perdant doit payer une « tournée » à tous
          les joueurs présents lors de la partie perdue.
        </p>
        <p>
          Lorsque deux joueurs, à la fin de la dernière manche, dépassent les
          100 points avec un score égal, nous procédons comme suit:
        </p>
        <ol>
          <li>
            D’abord, si l’un des deux joueurs était déjà retourné à 50 points
            via une technique que nous développerons plus loin, il perd.
          </li>
          <li>
            Ensuite, nous regardons le nombre de « Gabo» appelé par les deux
            joueurs. C’est le joueur qui en a appelé le moins, donc qui a pris
            le moins de risques, qui perd.
          </li>
          <li>
            Enfin, si les deux n’ont pas encore été départagés jusque-là, c’est
            le joueur qui prend le plus de points sur la dernière manche qui
            perd.
          </li>
          <li>
            Si malgré tout les joueurs sont encore à égalité – ce qui n’arrive
            qu’une fois sur dix millions – les deux joueurs jouent au loto,
            partagent leurs gains en cas de victoire et, surtout, paient leur
            tournée!
          </li>
        </ol>
      </div>
      <div>
        <p>Déroulement d’une manche :</p>
        <p>
          Pour commencer, il faut un joueur qui coupe le jeu, un qui mélange, et
          un qui lance la manche.
        </p>
        <p>
          Le premier qui distribue est le joueur qui n’a pas été dans une
          manifestation de lutte sociale depuis le plus longtemps parmi tous les
          autres joueurs. Celui qui est à sa droite coupe et celui à sa gauche
          commence. Le jeu se fait dans le sens des aiguilles d’une montre. A la
          manche suivante, les rôles se décalent vers la gauche : celui qui a
          distribué coupe, celui qui a commencé mélange et distribue, et ainsi
          de suite.
        </p>
        <p>
          Lors de la distribution, 4 cartes sont données à chaque joueur. Elles
          doivent bien être distribuées une par une. Une fois tous les joueurs
          servis, les cartes restantes forment une pioche disposée face cachée
          au milieu de tous les joueurs.
        </p>
        <p>
          Chaque joueur répartit devant lui, face cachée, les 4 cartes qu’on lui
          a données. La disposition des cartes doit suivre une construction
          géométrique simple qui ne peut varier au cours d’une manche – par
          exemple une ligne, un carré ou un losange. Une fois les cartes
          distribuées et étalées devant les joueurs, chacun va regarder deux
          cartes (et seulement deux) du jeu qu’il a en face de lui. Il peut
          regarder les deux cartes et les remettre, autant de fois qu’il veut
          tant que la manche n’a pas débutée.
        </p>
        <p>
          Un délai raisonnable est laissé aux joueurs pour mémoriser les deux
          cartes avant de démarrer la partie.
        </p>
        <p>
          Lorsque c’est son tour, chaque joueur a deux options – sauf le tout
          premier joueur qui ne peut que piocher:
        </p>
        <ul>
          <li>Piocher une carte de la pioche (face cachée)</li>
          <li>Prendre une carte de la défausse (face découverte).</li>
        </ul>
        <p>
          Lorsque la pioche est vide, un joueur se dévoue pour mélanger les
          cartes de la défausse et les remettre face cachée pour former la
          nouvelle pioche.
        </p>
        <p>Lorsqu’il pioche, chaque joueur à trois options. Il peut :</p>
        <ul>
          <li>
            Se défausser directement de la carte piochée si elle ne l’intéresse
            pas – par exemple, sa valeur numéraire est trop haute et le joueur
            ne veut pas prendre le risque d’avoir autant de point dans sa main.
            Il la place donc, face découverte, sur la pile de défausse située
            d’un côté ou de l’autre de la pioche.
          </li>
          <li>Utiliser son pouvoir si elle en a un – nous y reviendrons.</li>
          <li>
            L’intégrer à son jeu en la substituant à une autre de ses cartes,
            qu’il connaît ou non. Lorsqu’il intègre la carte à son jeu, la carte
            remplacée va sur la pile de défausse.
          </li>
        </ul>
        <p>
          Cette dernière opération est la plus courante dans une manche de Gabo.
          Elle permet notamment de connaître le plus de carte possible dans sa
          main. Mettons qu’il s’agisse de mon premier tour : je pioche un 6 que
          j’échange avec une des deux cartes que je ne connais pas; je découvre
          la carte en la jetant sur la défausse, c’est un 8. Je connais
          maintenant trois cartes dans mon jeu : le 6 que je viens de piocher et
          que j’ai déposé, face caché, à la place du 8 dont je me suis défaussé,
          et les deux autres cartes que j’ai mémorisées avant que la manche ne
          commence. Cette opération peut également être un moyen, lorsque je
          connais toutes mes cartes, de privilégié les cartes les plus basses :
          si j’ai un 10 dans mon jeu, il est intéressant de le remplacer par ce
          2 que je viens de piocher.
        </p>
        <p>
          Une fois qu’il a réalisé l’une de ces trois actions, son tour est
          terminé. C’est au joueur suivant de jouer.
        </p>
        <p>
          Lorsqu’il prend une carte de la défausse, le joueur ne peut procéder
          qu’à une seule opération : l’intégrer à son jeu en la substituant à
          une autre carte. Son tour prend alors fin.
        </p>
      </div>
      <div>
        Le but du jeu étant d’avoir le moins de point à la fin d’une manche,
        nous allons voir les différents moyens pour y parvenir:
      </div>
      <ol>
        <li>
          <span>Se défausser de ses cartes</span><br />
          Vos cartes sont comme des poids, qui vous tirent inexorablement vers
          le fond et dont il faut se débarrasser. Mais alors comment faire ?
          <br />
          Lorsqu’un joueur se défausse d’une carte dont la valeur correspond à
          une de vos cartes, alors vous pouvez vous en défausser, même si ce
          n’est pas votre tour de jeu et ce autant de fois que vous avez de
          cartes correspondantes ; si j’ai trois valets dans mon jeu, je peux me
          débarrasser des trois d’un coup. De cette manière vous réduisez le
          nombre de cartes (et donc de points) en votre possession. <br />
          Lorsque le nombre de vos cartes tombe à zéro, vous sortez du jeu, vous
          ne piocher plus de carte à votre tour et pouvez tranquillement
          profiter de votre cocktail – lors du décompte final, votre score sera
          de 0 point (que soit remerciés ici les joueurs investis qui ont
          défendu, « contre vents et marées », cette règle si précieuse; ils se
          reconnaîtront). <br />
          Attention : lorsqu’un joueur se trompe dans la carte sélectionnée dans
          son jeu pour s’en défausser, il doit piocher une carte supplémentaire
          qu’il dispose devant lui face cachée. Si par exemple un 2 est déposé
          par un adversaire et que, persuadé d’avoir moi aussi un 2 dans mon
          jeu, je saisis une carte qui s’avère être un 8, alors je garde mon 8
          et je pioche une carte supplémentaire. Cela dit si le joueur se
          remémore le bon emplacement de la carte dont il voulait se défausser,
          il est en droit de la jouer ; je me souviens que mon 2 est ailleurs,
          je le prends et m’en débarrasse – ouf c’est la bonne cette fois- ci.
        </li>
        <li>
          <span>Echanger des cartes</span> <br />
          Au fil de la partie, ayez les yeux baladeurs ! Vous pourrez ainsi
          observer où les joueurs placent les cartes qui ont été prises dans la
          défausse. Ainsi, si vous voyez où votre adversaire de gauche place
          l’As qu’il vient de ramasser dans la défausse, vous pourrez vous en
          emparer grâce au pouvoir du valet ou de la reine par exemple – à
          condition de piocher l’une de ces cartes à votre tour bien-sûr. Vous
          aurez ainsi en votre possession des cartes de faible valeur.
        </li>
        <li>
          <span>Dire « Gabo »</span>
          La manche se termine lorsqu’un des joueurs dit « Gabo » après son tour
          et avant que son voisin ne fasse une action. On ne peut pas dire «
          Gabo » au premier tour. De même, il n’est pas possible de dire « Gabo
          » lorsqu’on s’est défaussé de toutes ses cartes. Une fois le « Gabo »
          prononcé par le joueur, son jeu est gelé et plus personne ne peut y
          toucher. Il reste alors un dernier tour aux joueurs pour qu’ils se
          débarrassent d’un maximum de points avant le décompte final. A la fin
          de la partie, tous les joueurs dévoilent leurs cartes. <br />
          Si le joueur qui a prononcé « Gabo » a le score le plus faible, alors
          son score est de –5, auquel on soustrait la valeur numéraire des
          cartes en sa possession (par exemple, je termine une manche par un «
          Gabo » avec un 2 dans ma main : je réalise un score de -5 – 2 = -7).
          S’il est ex-aequo avec un autre joueur, son score est de 0. S’il n’a
          pas le score le plus faible son score est de 15.<br />
          Attention : lors du décompte final, on ne tient pas compte du score de
          ceux qui s’étaient débarrassés de toutes leurs cartes avant que le «
          Gabo » ne soit annoncé. En revanche, si après que le « Gabo » ait été
          annoncé, certains joueurs parviennent à se débarrasser de toutes leurs
          cartes, on tient compte de leur score, à savoir 0, pour déterminer si
          le « Gabo » est réussi ou non.
        </li>
      </ol>
      <p>
        Lorsqu’un joueur arrive à obtenir le score de 100 tout pile après une
        manche, son score redescend automatiquement à 50. Cette opération n’est
        possible qu’une fois par joueur et par partie.
      </p>

      <div>
        <p>Pouvoir des cartes :</p>
        <p>
          Lorsqu’un joueur pioche une des cartes suivantes, il peut utiliser ou
          non son pouvoir correspondant. S’il l’utilise alors la carte va dans
          la défausse. S’il la garde dans son paquet face cachée, c’est la carte
          échangée qui va dans la défausse.
        </p>
        <ul>
          <li>
            La dame : elle permet de regarder 2 cartes de deux jeux différents
            et de procéder (ou non) à un échange entre ces cartes, au choix du
            joueur.
          </li>
          <li>
            Le valet : il permet de procéder à un échange entre deux cartes de
            deux jeux différents, sans les regarder.
          </li>
          <li>
            Le 8 : il permet de regarder une carte dans le jeu d’un adversaire.
          </li>
          <li>Le 7 : il permet de regarder une carte dans son jeu.</li>
        </ul>
        <p>Valeur des cartes :</p>
        <ul>
          <li>
            Le roi rouge est considéré comme la meilleure carte car sa valeur
            est zéro.
          </li>
          <li>
            Le roi noir est considéré comme la pire carte car elle a la valeur
            la plus élevée, 25.
          </li>
          <li>
            Les têtes valent 10 points, les cartes numérotées valent leur valeur
            faciale, et enfin l’as vaut 1.
          </li>
        </ul>
      </div>
    </div>
  </ArticleArea>
</template>

<style scoped>
.scrollable {
  overflow: auto;
}
</style>
