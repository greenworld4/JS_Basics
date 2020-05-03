function danceHall (x, y, z) {
    let length = Number(x);
    let width = Number(y);
    let a = Number(z);
    let areaTotal = length*100*width*100;
    let wardrobe = a*100*a*100;
    let bench = areaTotal / 10;
    let freespace = areaTotal - wardrobe - bench;
    let dancers = freespace / (40 + 7000);

    console.log(Math.floor(dancers))
}

danceHall(["50", "25", "2"])