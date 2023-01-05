
var minimumRounds = function(tasks) {
    let counts = {}

    for(num of tasks){
        if(!(num in counts)){
            counts[num] = 0
        }
        counts[num] += 1
    }

    let rounds=0

    for(let [difficulty, count] of Object.entries(counts)) { 
        if(count==1){
            return -1
        }
        while(count>0 ) {
            if(count==4|| count==2){
                count=count-2
                rounds+=1
            }
            else{
                count=count-3   
                rounds+=1
            }
        }   
    }

    return rounds
};
