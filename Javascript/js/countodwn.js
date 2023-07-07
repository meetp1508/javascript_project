const endDate = "10 july 2023 12:00 AM";
document.getElementById("enddate").innerHTML = endDate;
const inputs = document.querySelectorAll('input')
function clock(){
    //setting the target date
    const end = new Date(endDate)
    //setting today's date
    const now = new Date()
    //giving difference bw target and today's date
    const diff = (end - now)/1000
    //converting into days
    const days = Math.floor(diff/60/60/24)
    //converting into hours
    const hours = Math.floor(diff/60/60)%24
    //conveerting into minutes
    const minutes = Math.floor(diff/60)%60
    //converting into seconds 
    const seconds = Math.floor(diff)%60
    inputs[0].value = days
    inputs[1].value = hours
    inputs[2].value = minutes
    inputs[3].value = seconds
}
clock()
//updating in every 1 second
setInterval(
    () => {
        clock()
    },1000
)

