'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'

const GALLERY_DATA = [
  {id:0,number:"0000",name:"Nutcracker Prince",description:"The original prince transformed into a nutcracker, cursed by the Mouse King. Based on E.T.A. Hoffmann's tale, this is where all theatrical transformations begin."},
  {id:1,number:"0001",name:"King Georging",description:"Cranksy was obsessed with a sold-out crowd admiring the King in Hamilton's performance and his over-the-top style and comedic mannerisms."},
  {id:2,number:"0002",name:"Hoffmann Cranks",description:"Cranksy stands stoic, a wooden symbol used during the holidays to lively up the scenery, and yearly I get to do my performance of a lifetime dancing and warding of Mouse King."},
  {id:3,number:"0003",name:"Curly Rangu",description:"Cranksy liked the accent and twang of one of the set designers' styles and one night he left his cowboy hat and boots —yeehaw!"},
  {id:4,number:"0004",name:"Imposter Santa",description:"Cranksy always sees this character getting dressed up backstage and everyone rehearsing goes crazy when this white-bearded fella comes around and people even sit on his lap."},
  {id:5,number:"0005",name:"Julius",description:"Cranksy always wanted to battle Roman style with this heavy vintage helmet and my trustee spike thrasher used to charm some queen called Cleopatra."},
  {id:6,number:"0006",name:"Sher",description:"Cranksy loves extra wigs leftover after rehearsals and sometimes some of the makeup artists leave the good stuff - do you believe in life after love."},
  {id:7,number:"0007",name:"Marquis",description:"Cranksy is digging the dew and dressing up aristocratic and dapper after some presidential shows have come and gone."},
  {id:8,number:"0008",name:"A Bransky",description:"Cranksy gets inspired watching designers paint the sets into urban scenes to create those realistic murals and it gets messy."},
  {id:9,number:"0009",name:"Tecuanes",description:"Cranksy witnessed a celebration on set for celebrating Día de Los Muertos during rehearsals and someone left their traditional hat and poncho —lucky me."},
  {id:10,number:"00010",name:"Avery",description:"Cranksy treasures dressing up on left behind props from an inspirational gospel character that had me singing God is trying to tell you something."},
  {id:11,number:"00011",name:"Chef Pepin",description:"Cranksy sneaks into the main kitchen at night, morphs into top chef mode, and tries to find a recipe with nuts in them to crack."},
  {id:12,number:"00012",name:"Korins The Artist",description:"Cranksy celebrates the amazing artist and set designers that put the finishing details that make the sets look so real that you feel like you are transported into that world."},
  {id:13,number:"00013",name:"Frosty Nutz",description:"Cranksy will sometimes sneak outside on a cold snonewy night and borrow the props from a human-made snonewman that's been left unattended."},
  {id:14,number:"00014",name:"Smiley Emogi",description:"Cranksy sometimes has dancers leave their smartphones upon my sleeve, and I watch how all the humans express with an emoji when they're happy."},
  {id:15,number:"00015",name:"Kassim",description:"Cranksy is a big fan of the clothing from a set with flying carpets and a friend who grants the main character some wishes —I want wishes."},
  {id:16,number:"00016",name:"Tevye",description:"Cranksy dives into some traditional props and clothing from one of his favorite dance-fiddling choreographies."},
  {id:17,number:"00017",name:"Mr. Sweeny",description:"Cranksy gets kind of spooked when this madness comes to town and rehearses some pretty freaky scenes from the barbershop."},
  {id:18,number:"00018",name:"Awestruck",description:"Cranksy occasionally has dancers leave their smartphones upon my sleeve, and I watch how all the humans express with an emoji when they're in utter excitement —awe."},
  {id:19,number:"00019",name:"Angry King",description:"Cranksy becomes the angered ruler upon the hours involved in rehearsing, set designing, lighting, and the unbearable sound check —Silence!"},
  {id:20,number:"00020",name:"Crewman",description:"Cranksy periodically finds the crew's items they left behind for the night and sunglasses and hoodies make this nutcracker feel alright."},
  {id:21,number:"00021",name:"Larson",description:"Cranksy can practically go out into the streets and blend right in with this rad hoodie, matching fly hat, and retro sunglasses."},
  {id:22,number:"00022",name:"Greer",description:"Cranksy admires a hipsteresque set designer who is unique, very well-groomed, and probably really good at chopping wood."},
  {id:23,number:"00023",name:"Joy Luck",description:"Cranksy often sees the crew munchin' take-out onset and is fascinated with the logo character on the open flapped white box with the wooden chopsticks in them."},
  {id:24,number:"00024",name:"Martin the Artist",description:"Cranksy is captivated by watching cast members cracking up chuckling to themselves on their little devices expressing their laugh with this face."},
  {id:25,number:"00025",name:"Amber Von Tussle",description:"Cranksy adored the hairstyle by the lead female character in 'Hairspray' when they performed on the theater stage."},
  {id:26,number:"00026",name:"XImba",description:"Cranksy gets festive and growls in the jungle themes prancing around the lion's pride on stage in the circle of life."},
  {id:27,number:"00027",name:"Jimbo from Accounting",description:"Cranksy admires the patrons who are clearly on island time in their tropical floral shirts, umbrella drink in hand, smokin' a stoggy and wasting away in Margaritaville."},
  {id:28,number:"00028",name:"Riley Fanboy",description:"Cranksy's's favorite in-house crew, who works the lights, has some wicked tattoos and always wears a sweet sports basketball jersey."},
  {id:29,number:"00029",name:"Tubbs",description:"Cranksy stands often next to the law and order keeping the crew and dancers safe and protected at all times."},
  {id:30,number:"00030",name:"Mouserinks",description:"Cranksy does this yearly and enters the fourth realm and converts into his nemesis, an oppressive rat ruler who wishes to rule over a magical kingdom I come from —nonet today buckey!"},
  {id:31,number:"00031",name:"Frank-ackula",description:"Cranksy loves old props, especially old fangs, wigs, and vintage suits this character also had a real thirst for blood —and was terrified of sunlight!"},
  {id:32,number:"00032",name:"Mid-evil Diego",description:"Cranksy often explores backstage and continually finds vintage relics and mixes and matches eras to beat down that pesky mouse king."},
  {id:33,number:"00033",name:"Homey The Nut",description:"Cranksy clowns around from time to time, putting on old red noneses from past-times and snapping on a good pair of overalls —honk honk!"},
  {id:34,number:"00034",name:"Dreamland Joe",description:"Cranksy found some fly Saigon props in some old vintage Vietnamese bar setting and even found a nice pair of gold chains to strut my swag."},
  {id:35,number:"00035",name:"Punkster Pixel",description:"Cranksy heard the commotion among the crew members bragging about some punk pixellated characters that skyrocketed in value —I'm pixellated nonew, so please, raise my value!"},
  {id:36,number:"00036",name:"Georg Casanova",description:"Cranksy's's's a big fan of folk-infused rock roll, and sometimes some of the main characters get pleasing fanatical fans that want to shower them with kisses."},
  {id:37,number:"00037",name:"NutzCranksy Pixel",description:"Cranksy was told by Nutzcracker, after hearing the rumor from crew members bragging about some punk pixellated characters that skyrocketed in value — pixellated done, raise my value!"},
  {id:38,number:"00038",name:"Bill the Inspector",description:"Cranksy has had a few close calls over the years, with some sets combusting into an infernone, and luckily the local fire department has come to the rescue."},
  {id:39,number:"00039",name:"Keisha Selfie",description:"Cranksy, over the years, has seen pictures taken with me to flip the phone over and all the shots taken of them —multiple shots of them!"},
  {id:40,number:"00040",name:"Lux Styles",description:"Cranksy admires the hip influencers that bring a small production and record off their iPhones to promote live to their audiences to come to the show that night —you're a pro if you use ring lights."},
  {id:41,number:"00041",name:"Anne Freckles",description:"Cranksy sees extraordinary professional makeup work done, and a  favorite is a freckled, red-haired character in a hard knoneck life."},
  {id:42,number:"00042",name:"Sparrow",description:"Cranksy loves a good laugh of some off-broadway shows, and who doesn't like dressing up as a comedic pirate in a story never told —and I already had the wooden peg leg!"},
  {id:43,number:"00043",name:"Handsky",description:"Cranksy gets a little too literal when the crew is building the sets and misinterprets —all hands on deck."},
  {id:44,number:"00044",name:"Marcianone",description:"Cranksy gets to hear the older crew talk about the best boxers that ever lived and hears them argue about who's their favorite knoneck-out beat down."},
  {id:45,number:"00045",name:"Robo Tommy",description:"Cranksy's favorite place, by far, is the old props storage room where you can find old Tommy guns and morph into an industrial-age electrical-charged robot assassin."},
  {id:46,number:"00046",name:"Lexi",description:"Cranksy became a fan of an assistant to the choreographer who loved her artistic, eclectic uniqueness and spot-on makeup in this emotional dance on the lives of poor young artists aspiring in New York."},
  {id:47,number:"00047",name:"Blevins",description:"Cranksy sneaks into a dressing room when everyone has gone home and dives into the Ps4 gaming system left by one of the main actors and plays until the crew comes into their call to duty  —I passed all the hard levels for you."},
  {id:48,number:"00048",name:"Bruce the Tourist",description:"Cranksy is captivated with these laid-back producers, with five o'clock shadows, sporting a fedora and smelling of intense cologne doing their rounds around greeting and mingling backstage."},
  {id:49,number:"00049",name:"Gaston",description:"Cranksy prances around in this smoked-filled elaborate set with a white  mask pretending to seduce the angel of music with a rose —now hit that high note!"},
  {id:50,number:"00050",name:"Bob Fosse",description:"Cranksy marveled at a classic choreographer whose signature moves with curved shoulders, turned-in knees, bowler hats, punctuated hand movements, and finger snaps echoed brightly in the Cabaret."},
  {id:51,number:"00051",name:"King Midas",description:"Cranksy overheard the tale of a gold-obsessed King where all he touched turned to gold, but when his food became gold, and he nearly starved to death, he realized his error."},
  {id:52,number:"00052",name:"Parker The Nut",description:"Cranksy is overwhelmed by excessive politeness and an urge to believe in believing, all while masking away his emotions in a song and dance."},
  {id:53,number:"00053",name:"Stone The Nut",description:"Cranksy taps into his missionary duties, sent to Uganda to try to convert citizens to a dance number religion in his dapper tie."},
  {id:54,number:"00054",name:"Joe Podcast",description:"Cranksy watched the crew gathered around watching a podcast on the big screen of controversial shenanigans, jiu-jitsu sleeper locks, and juicy gossip on extraterrestrial world anomalies —and funny."},
  {id:55,number:"00055",name:"Bernardo",description:"Cranksy grew fond of this gang rival love story on the set of an old New York City street where he enacts a Puerto Rican Shark fighting his enemy the Jets."},
  {id:56,number:"00056",name:"Elphabe",description:"Cranksy morphed into an electric-green skin and became the Wicked Witch of the West, in the magical land of Oz."},
  {id:57,number:"00057",name:"Glindo",description:"Cranksy, the good, runs wild into a bubbly dress, who looks like a princess and later becomes best friends with a green witch from the Upper Uplands."},
  {id:58,number:"00058",name:"Garry The Tourist",description:"Cranksy became a self-obsessed actor amid a mid-life crisis, freely indulging in a carefree lifestyle that brought upon unexpected twists."},
  {id:59,number:"00059",name:"Tevye",description:"Cranksy loved the energy of a fiddling playing milkman in the village with traditional Jewish practices and a daughter's love against all odds."},
  {id:60,number:"00060",name:"Roxie",description:"Cranksy depicts a satirical blonde celebrity criminal roaming the streets of Chicago reporting on crimes reported on and maybe, convicted of too."},
  {id:61,number:"00061",name:"Gyarmati",description:"Cranksy watched the set crew viewing live on the television a championship water polo match that had no one working that day."},
  {id:62,number:"00062",name:"Dusseldorf",description:"Cranksy saw potential productions with cool surfboards reminiscing the silly beach movies of the 1960s dancing to music called Surfing USA and saying \"Surf's up!\""},
  {id:63,number:"00063",name:"MacDermot",description:"Cranksy dug this rock tribal musical portraying hippies, boobie shots, and a whole array of big-haired anti-war irreverence —with scents of the movement."},
  {id:64,number:"00064",name:"Ragni Skater",description:"Cranksy loved the days the lighting crew would leave behind their killer skateboards allowing me to carve the length of the set and goofy foot into a nosegrind before almost falling off the stage."},
  {id:65,number:"00065",name:"Chom Brady",description:"Cranksy feels the Super Bowl energy when the cast and crew gather around the big screen on the main stage, jumping and hollering for their team to win."},
  {id:66,number:"00066",name:"Alvin Styles",description:"Cranksy vibes legendary choreographers and watching their grace and finesse over the main stage as they orchestrate the biggest productions in history."},
  {id:67,number:"00067",name:"Shreddie APA",description:"Cranksy loves the late-night recap after a show gets done, and the crew gathers backstage to celebrate and kick back on a couple of brewskies."},
  {id:68,number:"00068",name:"Teen Spriati",description:"Cranksy jammed out to a potential 90's band tribute that smelled like teen spirit and had you wondering where did you sleep last night."},
  {id:69,number:"00069",name:"Cindy",description:"Cranksy is forced into a life of servitude by a cruel stepmother and later is transformed into an elegant lady and attends the ball to find her Prince."},
  {id:70,number:"00070",name:"Dino The Nut",description:"Cranksy finds some of the set designer's kid's toys in one of the dressing rooms, and the match begins with the Tyrannosaurus rex battling out the Stegosaurus in a match to their extinction."},
  {id:71,number:"00071",name:"Chistery the Tourist",description:"Cranksy gets \"bored\" of flying around the stage wickedly portraying a rasta snow monkey from the mountains of the Vinkus."},
  {id:72,number:"00072",name:"Nikko Angle",description:"Cranksy halos in as leader of the flying monkeys in an Oz classic, capturing a distressed Dorthy to be taken to another witch."},
  {id:73,number:"00073",name:"Wukong",description:"Cranksy plays the first super-hero in literature, a powerful monkey with supernatural powers, and is imprisoned under a mountain by the Buddha, yet, styles out in the modern west traditions."},
  {id:74,number:"00074",name:"Bestia",description:"Cranksy loves morphing into beasty ways, talking to the servent teapots and clocks, courting a beauty in a tale as old as time."},
  {id:75,number:"00075",name:"Shiloh",description:"Cranksy sees the crew, early morning, bolt over to the green apron hero bringing in the special made-to-order java fix to ignite their caffeine fix.."},
  {id:76,number:"00076",name:"Itzak",description:"Cranksy pulled some punk-rock wigs and dressed down in drag from a rock musical from East Berlin, residing in Kansas and rocking it until the silent \"bye.\""},
  {id:77,number:"00077",name:"Bea",description:"Cranksy dresses up as the main character's wife in this Renaissance brother duo singing, dancing, and acting out in a musical comedy."},
  {id:78,number:"00078",name:"William The Nut",description:"Cranksy utters the words, \"To be, or not to be,\" in one of these legacies many works, from tragedies to comedies, from Hamlet to Romeo and Juliet and many more, a legend unbeknownst."},
  {id:79,number:"00079",name:"Proteus The Nut",description:"Cranksy plays lifelong friends who leave their rural home in Verona for the \"big city\" of Milan and falls in love, all the while learning to serve selflessly and happily in the best way we can."},
  {id:80,number:"00080",name:"Flynn The Nut",description:"Cranksy portrays a beloved priest in a church school in the Bronx defending against an accusation that had the audience with the discomfort of their uncertainties."},
  {id:81,number:"00081",name:"Aloysius the Nun",description:"Cranksy nun-ed it up and created drama in the Bronx by realizing that the only way to get justice is to create it herself —this will test her faith."},
  {id:82,number:"00082",name:"Robotanksy",description:"Cranksy raided the ol' prop room and got excited to get into an old robot relic and squeeze into a glass bubble— up to no good."},
  {id:83,number:"00083",name:"Audrey",description:"Cranksy got a little gory and turned into a plant that loved blood and people and was from outer space with plans to take over the world."},
  {id:84,number:"00084",name:"Harold",description:"Cranksy was fascinated by becoming the host of a Cabaret in Paris set in the early 20th century entertaining with the creatures of the underworld where —the show must go on!"},
  {id:85,number:"00085",name:"Rafreaky",description:"Cranksy went full tribal into a mandrill monkey to be the king's advisor and loved raising the tiny cup into the air to bring in the new king of the kingdom."},
  {id:86,number:"00086",name:"Wario",description:"Cranksy marvels at the many maintenances groundskeepers that fix all the theater repairs and upkeep and preserve this Nut Cranksy in top shape for my holiday ballet classic."},
  {id:87,number:"00087",name:"Yaphank",description:"Cranksy raided the prop room and found old army World War II costumes, bullets, and even a rifle ready for battle in my blueprint specials."},
  {id:88,number:"00088",name:"Silverado",description:"Cranksy overheard men in suits, backstage, talking about precious metals, and predicted that the \"Silver King\" will reign supreme over gold in the near future."},
  {id:89,number:"00089",name:"Bodacious",description:"Cranksy has seen a lot of bull crap, literally, from live animals brought on the stage and most of them love smoking cigars too."},
  {id:90,number:"00090",name:"Mr. Anderson",description:"Cranksy and the theater crew would often have movie nights, and one of my favorites was a futuristic matrix decided upon a red pill or a blue pill —simulated just like me."},
  {id:91,number:"00091",name:"Ababwa",description:"Cranksy rubs a magic lamp, is granted three wishes by a magic genie, best friend is a monkey, and courts a princess to a whole new world —come ride with me on a magic carpet ride."},
  {id:92,number:"00092",name:"Leira",description:"Cranksy embraces a fishtail adventure under the sea, best friends with a crab, loves forking around, and is granted legs all to be —part of your world."},
  {id:93,number:"00093",name:"Pat Tentacles",description:"Cranksy loves a witchy antagonist, especially with octopus tentacles, terrorizing a little mermaid in sea and land to all the —poor unfortunate souls."},
  {id:94,number:"00094",name:"Harold The Nut",description:"Cranksy is a sucker for a con man gone good after frauding a town into starting a band but gets love-struck and is led to make a decision or —shipoopi."},
  {id:95,number:"00095",name:"Danny The Nut",description:"Cranksy favorite 50's style musical with cool leather jackets, fast cars, a love for a blonde, and fun dance numbers that have you chanting go grease lighting —go grease lighting."},
  {id:96,number:"00096",name:"Bin The Nut",description:"Cranksy loves to break it down with rhythmic percussion beats using brooms, matchboxes, garbage cans, and zippo lighters energizing the stage with nonstop —STOMPS."},
  {id:97,number:"00097",name:"Evan The Nut",description:"A socially anxious high schooler, Evan the Cranksy, becomes entangled in a massive lie about his friendship with a deceased peer, all thanks to a totally misinterpreted, self-addressed letter!"},
  {id:98,number:"00098",name:"Betelgueuse",description:"Betelgueuse deader than ever! A strange and unusual teenager whose whole life changes when she meets a recently deceased couple and a demon with a thing for stripes."},
  {id:99,number:"00099",name:"Leonard",description:"A nautical character with a charmingly off-kilter grin, a thick brown beard, a smoking pipe, and an octopus tattoo, all while sporting a crisp white captain's hat and a smart blue uniform."}
]

export default function Gallery() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'number' | 'name'>('number')

  const allCharacters = GALLERY_DATA.map(char => ({
    ...char,
    image: `/images/characters/nut-cranksy-${char.number}.png`
  }))

  const filteredCharacters = allCharacters
    .filter(char => 
      char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.number.includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortBy === 'number') return a.id - b.id
      return a.name.localeCompare(b.name)
    })

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 pt-24 pb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">The Gallery</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">Explore all 100 hand-drawn theatrical transformations of The Nut Cranksy</p>
          <a
            href="https://opensea.io/collection/the-nut-cranksy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            View Collection on OpenSea →
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('number')}
                className={`px-4 py-2 rounded-lg ${sortBy === 'number' ? 'bg-gray-900 text-white' : 'bg-white border border-gray-300'}`}
              >
                Sort by Number
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded-lg ${sortBy === 'name' ? 'bg-gray-900 text-white' : 'bg-white border border-gray-300'}`}
              >
                Sort by Name
              </button>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Showing {filteredCharacters.length} of {allCharacters.length} characters
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredCharacters.map((char) => (
            <div
              key={char.id}
              onClick={() => setSelectedCharacter(char.id)}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer group"
            >
              <div className="relative aspect-square">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">#{(char.id + 1).toString().padStart(4, '0')}</p>
                <p className="font-bold text-sm mt-1 truncate">{char.name}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No characters found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      <section className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Own a Piece?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            The Nut Cranksy Collection is now available on OpenSea
          </p>
          <a
            href="https://opensea.io/collection/the-nut-cranksy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Buy on OpenSea
          </a>
        </div>
      </section>

      {selectedCharacter !== null && allCharacters[selectedCharacter] && (
        <div onClick={() => setSelectedCharacter(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl max-w-3xl w-full p-8 relative max-h-[90vh] overflow-auto">
            <button onClick={() => setSelectedCharacter(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition">
              ✕
            </button>
            <div className="grid md:grid-cols-2 gap-8">
              <img src={allCharacters[selectedCharacter].image} alt={allCharacters[selectedCharacter].name} className="w-full rounded-xl" />
              <div>
                <p className="text-sm text-gray-500">#{(allCharacters[selectedCharacter].id + 1).toString().padStart(4, '0')}</p>
                <h2 className="text-3xl font-bold mt-2">{allCharacters[selectedCharacter].name}</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">{allCharacters[selectedCharacter].description}</p>
                <a
                  href="https://opensea.io/collection/the-nut-cranksy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl mt-6 transition text-center"
                >
                  Buy on OpenSea →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}