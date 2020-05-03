function solve (input) {
    let seaTrips = Number(input.shift(500));
    let mountainTrips = Number(input.shift(500));
    let inputLine = input.shift();
    let totalSum = 0;
    let seaSum = seaTrips * 680;
    let mountainSum = mountainTrips * 499;
    

    while(inputLine != "Stop" ) {
        totalSum += seaSum + mountainSum;
                  
                             
                if (inputLine = "sea") {
                    seaSum ++;
                    seaTrips --;
                    
        
                } if (inputLine === "mountain") {
                    mountainSum ++;
                    mountainTrips --;        
                }

                
               
            }           
        

                console.log(`Good job! Everything is sold.Profit: ${totalSum} leva.`);
            }
        
            
        
        
        
        
        solve ([
            "2",
            "2",
            "sea",
            "mountain",
            "sea",
            "sea",
            "mountain",
            "Stop",
        ]);
    




