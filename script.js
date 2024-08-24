{/* <script>
async function getData(place) {
    // const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=6e6e8818d3c2461091bba0cbaf0c2123&location=${place}`;
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=1da4e8e902754087b03dca3edd0b4a55&location=${place}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const time = data.datetime;
        document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`;
    } catch (error) {
        console.error('Error fetching time data:', error);
    }
}

document.querySelectorAll(".allPaths").forEach(e => {
    e.addEventListener("mouseover", function () {
        window.onmousemove = function (j) {
            const x = j.clientX;
            const y = j.clientY;
            document.getElementById("name").style.top = (y - 20) + "px";
            document.getElementById("name").style.left = (x + 10) + "px";
        };
        e.style.fill = "pink";
        document.getElementById("name").style.opacity = 1;
        document.getElementById("namep").innerText = e.id;
    });
    e.addEventListener("mouseleave", function () {
        e.style.fill = "#ececec";
        document.getElementById("name").style.opacity = 0;
    });

    e.addEventListener("click", function () {
        getData(e.id);
    });
});
</script> */}
