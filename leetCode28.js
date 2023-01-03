function pidgeyCalc ( pidgeys, candy ) {
    let amountOfPidgeys=0
    let ourXP= 0
    while(candy>=12){
       candy-=12
       pidgeys-=1 
       ourXP+=500 
       candy+=1

        if(pidgeys>1){
            pidgeys-=1
            candy+=1

        }

    
    }

    pidgeys
    // catch 'em all

return ourXP
  }

  console.log(pidgeyCalc(63,1))


//   Test.assertEquals(pidgeyCalc(1, 12), 500, 'Expected 500');
//   Test.assertEquals(pidgeyCalc(13, 144), 6500, 'Expected 6500');
//   Test.assertEquals(pidgeyCalc(10, 63), 3000, 'Expected 3000');
//   Test.assertEquals(pidgeyCalc(1, 63), 500, 'Expected 500');
//   Test.assertEquals(pidgeyCalc(63, 1), 2500, 'Expected 2500');
//   Test.assertEquals(pidgeyCalc(0, 0), 0, 'Expected 0');



// To evolve a Pidgey costs 12 Pidgey Candy, but you'll be rewarded with 500 XP and 1 extra Pidgey Candy.

// Surplus Pidgeys can be transferred to Professor Willow in exchange for 1 Pidgey Candy - you won't get the Pidgey back.

// #Example

// If you have 2 Pidgeys and 23 Pidgey Candy, you can evolve 1 Pidgey for 12 Pidgey Candy. You have 11 Pidgey Candy left, but you received 1 Pidgey Candy for evolving the first Pidgey, making the 12 you need to evolve the 2nd. You will end up with 1000 XP.

// #Your job

// Create a function that will take 2 integers as arguments: a number of Pidgeys and an amount of Pidgey Candy. It should return the maximum XP gained from evolving the highest possible number of Pidgeys.

// Remember, you'll need to take into account the extra Pidgey Candy gained from tranferring and evolving Pidgeys.

