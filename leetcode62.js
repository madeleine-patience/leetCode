
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


let tasks= [2,3,3]
console.log(minimumRounds(tasks))
//You are given an array of numbers(tasks)
//Tasks represents the difficultly level of each task.
// In each round, you can complete ither 2 or 3 tasks of the same level.






// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

 

// Example 1:

// Input: tasks = [2,2,3,3,2,4,4,4,4,4]
// Output: 4
// Explanation: To complete all the tasks, a possible plan is:
// - In the first round, you complete 3 tasks of difficulty level 2. 
// - In the second round, you complete 2 tasks of difficulty level 3. 
// - In the third round, you complete 3 tasks of difficulty level 4. 
// - In the fourth round, you complete 2 tasks of difficulty level 4.  
// It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.
// Example 2:

// Input: tasks = [2,3,3]
// Output: -1
// Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.
 

// Constraints:

// 1 <= tasks.length <= 105
// 1 <= tasks[i] <= 109