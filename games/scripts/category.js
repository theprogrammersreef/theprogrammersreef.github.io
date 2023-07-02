var categories = ["int", "float", "str", "char"]
var question_count = 10

var questions = format_questions(create_rand_questions(question_count, categories))
create_question_divs(questions)

function create_rand_questions(cnt, categ) {
    var random_questions = []
    var hasTrickyString = false

    for(var i = 0; i < cnt; i++) {
        var rand_categ = categ[Math.floor(Math.random() * categ.length)]
        var question = "N/A"

        switch(rand_categ) {
            case "int":
                var max = 150
                var min = -150
                int = Math.floor(Math.random() * (max - min + 1)) + min
                question = int.toString()
                break
            case "float":
                var max = 150
                var min = -150
                float = Math.random() * (max - min + 1) + min
                precision = Math.floor(Math.random() * 4) + 1
                question = float.toFixed(precision).toString()
                break
            case "char":
                var chars = [...Array(26)].map((_,i)=>String.fromCharCode(i+97))
                                          .concat([...Array(26)].map((_,i)=>String.fromCharCode(i+65)))
                                          .concat(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '<', '>', '?'])

                question = chars[Math.floor(Math.random() * chars.length)]

                break
            case "str":
                var strings = ["Apple","banana","CAT","Dog","Elephant","flower","Guitar","Hat","Ice Cream","jungle","Kiwi","Lion","monkey","NOTEBOOK","Orange","PENCIL","Queen","Rainbow","StrawBerry","Tiger","Umbrella","VIOLIN","Watermelon","Xylophone","YOGA","Zebra","Astronaut","Fireworks","Globe","Honey","Island","Jazz","Kangaroo","Lemon","Mountain","Nightingale","Ocean","Parrot","Quilt","Rain","Sailboat","Tulip","Unicorn","Volcano","Whale","Avocado","Beach","Cupcake","Dolphin","Elephant","Feather","Giraffe","Happiness","Ice cream","Jungle","Kiwi","Lighthouse","Moon","Ninja","Oasis","Penguin","Quokka","rainbow","SunFlower","Tornado","Umbrella","Volleyball","Waterfall","Xylophone","Yoga","Zebra","Airplane","Butterfly","Cactus","Dandelion","Elephant","Flamingo","Guitar","Hippo","Island","Jellyfish","Kite","Lighthouse","Mountain","Night","Ocean","Palm tree","Quill","River","Sun","Tropical","Umbrella","volcano","Watermelon","Xylophone","YOGA","Zebra","Acorn","Beach","Coffee","Donut","Elephant","Fire","Giraffe","Hiking","Ice cream","Jungle","Kangaroo","Lemon","Moon","Nature","Ocean","Palm tree","Queen","Rain","Sun","Tropical","Umbrella","Volcano","Watermelon","Xylophone","Yoga","zebra","Sunset","Mountain range","Road trip","Starlight","Secret garden","Winter wonderland","Sundown","Moonlight","Paradise found","Dream catcher","whispering winds","Timeless beauty","TWILIGHT ZONE","Eternal sunshine","Ocean breeze","Enchanted forest","Dancing cows","one", "two", "three", "four", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"]
                
                var strings_tricky = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1.2", "2.3", "3.4", "4.5", "5.6", "6.7", "7.8", "8.9"]

                if (hasTrickyString == false) {
                    question = strings_tricky[Math.floor(Math.random() * strings_tricky.length)]
                    hasTrickyString = true
                } else {
                    question = strings[Math.floor(Math.random() * strings_tricky.length)]
                }

                break
            default:
                question = "N/A"
        }

        random_questions.push([question, rand_categ])
    }
    
    return random_questions
}

function format_questions(quests) {
    for(var i = 0; i < quests.length; i++) {
        var question = quests[i][0]
        var answer = quests[i][1]

        if (answer === "str") {
            quests[i][0] = '"' + question + '"'
        } else if (answer === "char") {
            quests[i][0] = "'" + question + "'"
        }

        console.log(question + " = " + answer)
    }

    return quests
}

function create_question_divs(quests) {
    for (var i = 0; i < quests.length; i++) {
        var new_div = document.createElement('div')
        new_div.id = 'div-question' + i
        new_div.className = 'div-question'

        document.getElementById('div-games-category').appendChild(new_div);
    }
}