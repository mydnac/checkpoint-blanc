const videos = [
    {
        title: 'Video 1',
        nbView: 2000
    },
    {
        title: 'Video 1',
        nbView: 100
    },
    {
        title: 'Video 1',
        nbView: 2000000
    },
    {
        title: 'Video 1',
        nbView: 34567
    },
    {
        title: 'Video 1',
        nbView: 3039
    },
]

function averageView(videos) {
let totalView = 0;
for (let total = 0; total < videos.length; total++) {
    totalView += videos[total].nbView
    }
    return totalView = totalView / videos.length
}
console.log(averageView(videos))    



// Afficher le nombre moyen de vue  résultat : 407941.2
// toujours pareil: console.log(taSuperFonction(videos)) // 407941.2