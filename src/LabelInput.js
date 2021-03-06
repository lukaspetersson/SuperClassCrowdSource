import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const labels = [
	"gul lök",
	"purjolök",
	"rödlök",
	"schalottenlök",
	"silverlök",
	"vitlök",
	"champinjoner",
	"kantareller",
	"karl johan",
	"kastanjechampijoner",
	"ostronskivling",
	"portabella",
	"shitake",
	"trattkantareller",
	"jordärtskockor",
	"kålrot",
	"morot färgad",
	"morot",
	"palsternacka",
	"persiljerot",
	"potatis",
	"rotcelleri",
	"sötpotatis",
	"dill",
	"ingefära",
	"krondill",
	"pepparrot",
	"persilja",
	"julnötter",
	"kaffe lösvikt",
	"lösviktgodis",
	"naturgodis",
	"räkor",
	"te lösvikt",
	"vildfågelfrö",
	"ägg lösvikt",
	"banan",
	"banan påse",
	"kvitten",
	"päron conferance",
	"päron eko",
	"päron migo",
	"päron nashi",
	"päron qtee",
	"päron santa maria",
	"päron sverige",
	"äpple röda",
	"äpple golden",
	"äpple granny smith",
	"äpple honey crunch",
	"äpple jazz",
	"äpple pink lady",
	"äpple royal gala",
	"äpple grön",
	"äpplen sverige",
	"apelsin",
	"blodapelsin",
	"chokladapelsin",
	"clementin",
	"pomelo",
	"pomeranser",
	"cantaloupe",
	"citrusmelon sverige",
	"galiamelon",
	"honungsmelon",
	"jimbee melon",
	"mini vattenmelon",
	"nätmelon",
	"piel de sapo",
	"rädisa vattenmelon",
	"vattenmelon",
	"vattenmelon gul",
	"vindruva grön",
	"vindruva röd",
	"jordgubbar",
	"körsbär/bigarråe",
	"lingon",
	"rabarber",
	"annanas",
	"daddlar medjol",
	"drakfrukt/pitahaya",
	"kaktusfikon",
	"kiwiano",
	"kumquat",
	"limequats",
	"litchie",
	"pepino",
	"rambutan",
	"tamarillo",
	"aprikoser",
	"nektariner",
	"persika paraguayo",
	"persikor",
	"plommon",
	"plommon pluots",
	"kvisttomater",
	"körsbärtomater på kvist",
	"tomater gourmet",
	"tomater",
	"gurka",
	"inläggningsgurka",
	"paprika grön",
	"paprika gul",
	"paprika röd",
	"paprika orange",
	"peppar röd/pimient",
	"endivesallad",
	"isbergsallad",
	"mangold",
	"pak choi",
	"romansallad",
	"salladskål",
	"böna lösvikt",
	"böna vax",
	"kastanjer",
	"majrova",
	"polka/gulbetor",
	"pumpa butternut",
	"pumpa dekoration",
	"pumpa haloween",
	"pumpa hokkaido",
	"pumpa muscat",
	"rättika",
	"rödbeta",
	"sparris vit",
	"zucchini gul",
	"blomkål",
	"färnkål",
	"grönkål",
	"kålrabbi",
	"rödkål",
	"savoykol",
	"spetskål",
	"viktkål",
	"Avokado"]

class LabelInput extends React.Component {

	    render() {
		return (
			<Typeahead
				id="basic-typeahead-single"
				onChange={(e)=>this.props.setLabel(e)}
				options={labels}
				placeholder=""
			   />
  	  );
  }
}

export default LabelInput;
