// Kate Keefe, Economics7Principles info for slides

var slideIndex = 0

var slides = [{
    title: "Scarcity Forces Tradeoffs",
    description: "Through unlimited wants and limited resources, <mark>scarcity</mark> forces people to choose what they have, forcing <mark>trade-offs</mark> they sometimes aren’t even aware of. These trade-offs aren’t limited to money, as they also include time and opportunities lost to the chosen want/service/opportunity. The second choice option that was lost in a trade off is known as the <mark>opportunity cost</mark>.",
    image: "media/Scarcity Forces Tradeoffs.png",
    example1: "I don’t have infinite time, so to keep my grades afloat I have to spend an hour doing my homework instead of sleeping or binge watching Netflix, as I wish to.", 
    example2: "The government doesn’t have infinite funding, so we can’t have free food or healthcare.",
    color: "#009bba"
}, {
    title: "Costs vs. Benefits",
    description: "A <mark>cost-benefit analysis</mark> can be used to compare, by weighing the <mark>costs</mark> vs the <mark>benefits</mark> of a choice, the outcomes of two wants to decide which to trade-off as an opportunity cost. This can be very subjective, as the <mark>benefits</mark> and <mark>costs</mark> are the money, time, effort, experience, or improvement that mainly relate to the person comparing their options.",
    image: "media/Cost vs. Benefits.png",
    example1: "I could watch Netflix for an hour because it would make me happy, or I could study for an upcoming test so I am well prepared.", 
    example2: "College tuition could be cheaper, but expenses like new stadiums are more important to the college’s status, so tuition prices are raised to the college’s interests.",
    color: "#3da13d"
}, {
    title: "People Think at the Margin",
    description: "Most decisions in our daily life are <mark>incremental decisions</mark>, where people pick choices as they progress through a number of similar things, rather than all-or-nothing decisions. The continued evaluation that incremental decisions provide keep pushing the <mark>margin</mark>, the stopping point or edge, on an issue or problem. Every time it comes to decide on the issue, a person must compare the <mark>marginal costs vs. marginal benefits</mark>, much like the costs vs benefits. If they decide to continue, then they accept the <mark>marginal cost</mark> of that new unit to gain the <mark>marginal benefit</mark> given by the new unit.",
    image: "media/People think at the margin.png",
    example1: "Should I watch another episode even though it is late? I already watched 4 episodes today and I am very tired, so I decide it is time for me to go to sleep.", 
    example2: "The country examines the marginal cost of the president every four years, so if another president has better marginal benefits for the next term, then they are elected into office.",
    color: "#d9840f"
}, {
    title: "Incentives Matter",
    description: "<mark>Incentives</mark> are benefits and costs that go along with a choice. Positive incentives are like benefits, because they entice a person to choose that given option. Negative incentives are like costs, as they discourage a person from choosing a given option, like negative reinforcement.",
    image: "media/Incentives matter.PNG",
    example1: "A swear jar helps discourage my family members from swearing in the house by taxing them twenty-five cents when they swear, therefore influencing people not to swear.", 
    example2: "The company is offering a bonus to whoever makes the most sales, so everyone is encouraged to sell more products.",
    color: "#9e6bbf"
}, {
    title: "Trade Makes People Better Off",
    description: "<mark>Trade</mark> allows for people to focus on what they’re good at, as in their <mark>work specialization</mark>. This specialization allows for people to concentrate on what they are skilled for & what they enjoy to do. When people work at something they have a knack for, then they are more <mark>efficient</mark>. Nowadays direct trading isn’t very common, as people use money, a placeholder for a person’s efforts, to purchase goods or services from shops. This makes the <mark>price</mark>, the value of a good or service, an important consideration when choosing a choice, as it can have a negative or positive influence on the potential buyer. Ideally a trade occurs when both the buyer and the producer benefit from the exchange.",
    image: "media/Trade makes people better off.png",
    example1: "I am interested in computer science because I enjoy programming and I am skilled in this area, so I will be a more efficient programmer than I would be a waitress or accountant.", 
    example2: "The government doesn’t regulate where people work because it doesn’t know every person’s work specialization, so people have the opportunity to work at an occupation of their choosing.",
    color: "#a62b56"
}, {
    title: "Markets Coordinate Trade",
    description: "A <mark>market</mark> is any place where an exchange of goods or services happen. A free market is a market that has little or no government regulations, so people can trade until their heart’s content (or they run out of goods/services). In this market, both the buyers and the sellers are weighing the costs and benefits of a transaction, as both want an outcome with a high benefit for themselves, and they have the freedom to choose if they exchange or not. This is why these kinds of free markets are sustained by supply and demand all on their own.",
    image: "media/Markets coordinate trade.png",
    example1: "I bought an enamel pin off of Etsy when the price was discounted slightly, as this benefitted both me and the seller.", 
    example2: "Governments can help markets by breaking up monopolies to increase competition for a common product.",
    color: "#363391"
}, {
    title: "Future Consequences Count",
    description: "When you make a decision, the effects can be both immediate and long-lasting. Sometimes, especially on impulsive decisions, people only think about their immediate outcome, and then learn of their bad future consequences afterwards. Since the future is not concrete, we can only make decisions with the expected long-term outcomes in mind. But sometimes life throws curveballs, and decisions we make can have unintended side effects, which is more commonly known as the <mark>Law of Unintended Consequences</mark>. This law comes into play when a decision has an unexpected outcome or consequence.",
    image: "media/Future Consequences Count.png",
    example1: "I felt sick one school day and decided to stay home, which meant missing robotics. Unknown to me, all after school activities were cancelled that day due to bad weather. I didn’t plan on this, but it was an unexpected benefit from my decision to stay home, as I hadn’t missed a robotics meeting after all.", 
    example2: "The government can’t constantly print money for all of their funding needs, as it will affect all markets as time goes on, inflating the prices of goods and services to ridiculous amounts.",
    color: "#21b08f"
}]

document.getElementById("slidesTotal").innerHTML = slides.length
