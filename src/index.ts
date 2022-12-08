import { Queue } from "datastructures-js"

// // // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// // console.clear();
// // function mergeSort (arr:number[]):number[] {
// //      if(arr.length<2) return arr;
// //      let mid=Math.floor((arr.length)/2);
// //      let leftArray=arr.slice(0,mid);
// //      let rightArray=arr.slice(mid);
// //      return merge(mergeSort(leftArray), mergeSort(rightArray))








// // }
// // function merge (left:number[], right:number[]):number[] {
// //   let results:number[]=[];
// //    while(left.length && right.length) {
// //      if(left[0]<=right[0]) {
// //         results.push(...left.splice(0,1));
// //      }else{
// //         results.push(...right.splice(0, 1));
// //      }
// //    }

// //   return [...results, ...left, ...right];
// // }

// // function minimumOperations(nums: number[]): number {
// //    let sortedArray:number[]=mergeSort(nums);
// //    console.log(sortedArray)
// //    let result:number=0;
// //    for(let i=0; i<sortedArray.length; i++) {
// //      if(sortedArray[i]>0){
// //         let temp=sortedArray[i];
// //         let left=i;
// //         result++;
// //         while(left<sortedArray.length){
// //              if(sortedArray[left]>0){

// //                  sortedArray[left]=sortedArray[left]-temp;
// //              }
// //              left++;
// //         }
// //      }     
// //    }
// //    console.log(sortedArray)
// //    return result;
// // };

// // // console.log(minimumOperations([0]))

// // const findPivotIndex=function(arr:number[], startIndex: number, endIndex: number):number {

// //     let pivot=arr[startIndex];
// //     let pivotIndex=startIndex;
// //     for(let i=startIndex+1; i<arr.length; i++) {
// //         if(pivot > arr[i]){
// //              pivotIndex++;
// //              let temp=arr[pivotIndex];
// //              arr[pivotIndex]=arr[i];
// //              arr[i]=temp;
// //              console.log(arr);
// //         }
// //     }
// //     let temp=arr[startIndex];
// //     arr[startIndex]=arr[pivotIndex];
// //     arr[pivotIndex]=temp;
// //     return pivotIndex;
// // }

// // // findPivotIndex([2,3,4,2,5,6,0,9], 0,[2,3,4,2,5,6,0,9].length)

// // function binarySearch(arr:any[], target:any):number{
// //        let left:number=0;
// //        let right:number=arr.length-1;
// //        while(left<=right){
// //             let mid=Math.floor((left+right)/2);
// //            if(arr[mid]===target){
// //               return mid;
// //            }else if(arr[mid]<target){
// //               left=mid+1;
// //            }else {
// //               right=mid-1;
// //            }
// //        }
// //        return -1;  
// // }




// // // Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// // // Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// // // Output: [[1,6],[8,10],[15,18]]
// // // Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// // // function intervalsArray(intervals: number[][]): number[][] {
// // //     if(intervals.length === 1) return intervals;
// // //     let results:number[][]=[];
// // //     let newInterval=intervals[0];
// // //     console.log(newInterval, "NEW Interval")
// // //     for(let key in intervals) {
// // //          if(intervals[key][0]<= newInterval[1]){
// // //             console.log("Reach here")
// // //               newInterval[1]=Math.max(newInterval[1],intervals[key][1])
// // //          }else{
// // //             newInterval=intervals[key];
// // //             results.push(newInterval);
// // //          }
// // //     }
// // //     console.log(results, "RESULS")
// // //     return results;
// // // };

// // // intervalsArray([[1,3],[2,5],[4,6],[15,18]]);

// // function isAnagram(s: string, t: string): boolean {
// //      if(s.length !== t.length) return false;
// //      let firstArray:string[]=s.split("");
// //      let secondArray:string[]=t.split("");
// //      let result:string="";
// //      for(let i=0; i<firstArray.length; i++) {
// //         console.log(s[i])
// //          for(let j=0; j<secondArray.length; j++) {
// //             //  console.log("J Value:", t[j]);
// //              if(firstArray[i]===secondArray[j]){
// //                  result+=secondArray[j];
// //                  secondArray.splice(j,1);
// //                  console.log(secondArray)
// //                  break;
// //              } 
// //          }
// //      }
// //     //  console.log(result, "RESULT")
// //      return result===s ? true: false
// // };


// // // console.log(isAnagram("anagram",
// // // "nagaram"));


// // function intersect(nums1: number[], nums2: number[]): number[] {
// //    const sortedArray1=nums1.sort((a,b) => a-b);
// //    const sortedArray2=nums2.sort((a,b) => a-b);
// //    let answer:number[]=[];
// //    let i=0
// //    let j=0;
// //    while(i<sortedArray1.length && j<sortedArray2.length){
// //           if(nums1[i]< nums2[j]){
// //               i++;
// //           }else if(nums1[i]>nums2[j]){
// //             j++;
// //           }else {
// //               answer.push(nums1[i]);
// //               i++;
// //               j++;
// //           }
// //    }
// //    return answer; 
// // }


// // // console.log(intersect([2,9,8], [9,4,9,8,4]));

// // // function findTheDifference(s: string, t: string):string {
// // //     if(s.length===0) return t;
// // //     const suffledValue=t.split('');
// // //     for(let key of suffledValue){
// // //         let index=suffledValue.indexOf(key);
// // //         if(index>-1) suffledValue.splice(index,1);
// // //     }
// // //     return suffledValue[0];
// // // };

// // // console.log(findTheDifference("ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
// // // "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"));


// // function thirdMax(nums: number[]) {
// //    let sortedArray:number[]=mergeSort(nums);
// //    let count:number=3;
// //    let left=sortedArray.length-1;
// //    let right=0
// //    while(left>=right){
// //         console.log(sortedArray[left]);
// //         if(sortedArray[left]!==sortedArray[left-1]){
// //              count--;
// //             if(count===0){
// //                 return sortedArray[left];
// //             }
// //         }
// //         left--;

// //    }
// //    return sortedArray[sortedArray.length-1];
// // };

// // // console.log(thirdMax([2,2,3,1]));
// // // [1,2,2,3]

// // // 455

// // // Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// // // Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// // // Input: g = [1,2,3], s = [1,1]
// // // Output: 1
// // // Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// // // And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// // // You need to output 1.
// // function findContentChildren(g: number[], s: number[]): number {
// //        let sortedGreed:number[]=[...g].sort((a:number,b:number)=>a-b);
// //        let sortedCookie:number[]=[...s].sort((a:number,b:number)=>a-b);
// //        let i=0;
// //        let j=0;
// //        while(i<sortedCookie.length && j<sortedGreed.length){
// //              if(sortedCookie[i]>=sortedGreed[j]){
// //                     i++;
// //                     j++
// //              }else{
// //                  i++;
// //              }
// //        }
// //        return j;
// // };

// // // console.log(findContentChildren(
// // //     [1,2,3],
// // //     [1,1]));

// // // Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// // // 3 >2
// // // Output: [[1,6],[8,10],[15,18]]
// // // Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// // function merging(intervals: number[][]): number[][] {
// //     let sortedArray:number[][]=[...intervals].sort((a:number[],b:number[])=>a[0]-b[0])
// //     console.log(sortedArray)
// //     let results:number[][]=[];
// //     let endIndex:number=0;
// //     let lastElement:any=[];
// //     for(const [start, end] of sortedArray){
// //          if(endIndex !== 0){
// //              if(start > endIndex){
// //                results.push([start, end]);
// //                endIndex=end;
// //              }else{
// //                 lastElement=results.pop();
// //                 let minValue:number=Math.min(lastElement[0],start);
// //                 let maxValue:number=Math.max(lastElement[1],end);
// //                 results.push([minValue,maxValue]);
// //                 endIndex=end;
// //              }
// //          }else{
// //             results.push([start, end]);
// //             endIndex=end; 
// //          }
// //     }
// //    return results;    
// // };
// // // console.log(merging([[2,3],[4,5],[6,7],[8,9],[1,10]]))

// // // Input: items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]
// // // Output: [[1,6],[3,9],[4,5]]

// // function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
// //         let items = new Array<number>(1001).fill(0);
// //          items1.forEach((val, idx) => {
// //             items[val[0]] += val[1];
// //         });
// //         // console.log(items)
// //         items2.forEach((val, idx) => {
// //             items[val[0]] += val[1];
// //         });
// //         // console.log(items, "ITEMS");
// //         console.log(items.map((val, idx) => {
// //             return [idx, val]
// //         }))
// //         return items.map((val, idx) => {
// //             return [idx, val]
// //         }).filter(a => {
// //             return a[1] !== 0
// //         });

// // };

// // // console.log(mergeSimilarItems(
// // //     [[1,1],[4,5],[3,8]],
// // //     [[3,1],[1,5]]))
// // // [ [ 1, 5 ], [ 3, 1 ] ]
// // // [ [ 1, 1 ], [ 3, 8 ], [ 4, 5 ] ]


// // // function abc (arr:number[]) {
// // //     while(arr.length>0){
// // //         console.log(arr[0])
// // //         arr.splice(0,1);
// // //    } 
// // //    console.log(arr);   
// // // }

// // // abc([2,3,2,4])

// // function generateEmailList(_arr:{}[], configType:String) {
// //     let list:{}[]=[];
// //     let right=_arr.length;
// //     while(right>0){
// //         if(Object(_arr[0]).hasOwnProperty("emailChannel")){
// //               let temp=Object(_arr[0]).emailChannel;
// //             //    console.log(temp, "TEMPPPPP")
// //               let j=0
// //                while(j<=Array(temp).length-1){
// //                        let value=Object(Array(temp)[0])
// //                        if(Object(value).hasOwnProperty(configType)){
// //                         type ObjectKey = keyof typeof value;
// //                         const keyType=configType as ObjectKey;
// //                         console.log(keyType,"KEY")
// //                              let config=Object(value)[keyType];
// //                              list.push(config)
// //                        }
// //                        j++;
// //                }
// //         }
// //         _arr.splice(0,1);
// //     }
// //     console.log(list, "LIST");

// // }


// // function answerQueries(nums: number[], queries: number[]): number[] {
// //        let results:number[]=[];
// //        let sortedNums:number[]=[...nums].sort((a:number, b:number) => a - b);
// //        let sortedQueries:number[]=[...queries];
// //        let queryIndex:number=0;
// //        while(queryIndex<queries.length){
// //                let numsIndex:number=0;
// //                let sum:number=0;
// //                let count:number=0;
// //                while(numsIndex<sortedNums.length){
// //                      sum+=sortedNums[numsIndex];
// //                      if(sum<=sortedQueries[queryIndex]){
// //                           count++;
// //                      }
// //                      numsIndex++;
// //                }
// //              sum=0;  
// //              results.push(count);
// //              count=0;
// //              queryIndex++; 
// //        }

// //        return results;
// // };

// // // console.log(answerQueries([736411,184882,914641,37925,214915],[331244,273144,118983,118252,305688,718089,665450]))
// // // [3--->1]
// // // Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// // function smallerNumbersThanCurrent(nums: number[]): number[] {
// //        let result:number[]=[];
// //        let count:number=0
// //        let i=0;

// //        while(i<nums.length){
// //              let j=0;
// //              while(j<nums.length){
// //                  if(nums[j]<nums[i]){
// //                      count++;
// //                  }
// //                  j++;  
// //              }
// //              result.push(count);
// //              count=0;
// //              i++;
// //        }
// //        return result;
// // };

// // // console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

// // function largestInteger(num: number): number {
// //       let str:any=num.toString().split("");
// //       for(let i=0; i<=str.length-1; i++){
// //           let rightValue:number=+str[i];
// //           let rightIndex:number=i
// //           for(let j=i+1; j<=str.length; j++){
// //               if((rightValue % 2 === 0) && (+str[j] % 2 === 0)){
// //                   if(+str[j]>rightValue){
// //                      rightValue=+str[j];
// //                      rightIndex=j;
// //                   }
// //               }else if((rightValue % 2 ===1)&& (+str[j]% 2 === 1)){
// //                   if(+str[j]> rightValue){
// //                       rightValue=+str[j];
// //                       rightIndex=j;
// //                   }
// //               }
// //           }
// //           let temp=str[i];
// //           str[i]=str[rightIndex];
// //           str[rightIndex]=temp;
// //       }
// //       return str.join("");
// // };


// // // console.log(largestInteger(1234));

// // function findFinalValue(nums: number[], original: number): number {
// //          if(original !==-1) return original 
// //          let answer:number=0;
// //          let left:number=0;
// //          let right:number=nums.length-1;
// //          const sortedArray:number[]=[...nums].sort((a:number,b:number) => a-b);
// //          let value:number=original
// //          for(let i=0;i<sortedArray.length;i++) {
// //                const res:number=binarySearch(sortedArray, original);
// //                if(res !== -1) {

// //                }
// //          } 
// //     return original;
// // };

// // // console.log(findFinalValue([5,3,6,1,12], 3))

// // // You are given an integer array digits, where each element is a digit. The array may contain duplicates.

// // // You need to find all the unique integers that follow the given requirements:

// // // The integer consists of the concatenation of three elements from digits in any arbitrary order.
// // // The integer does not have leading zeros.
// // // The integer is even.
// // // For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

// // // Return a sorted array of the unique integers.


// // // function findEvenNumbers(digits: number[]): number[] {
// // //         let answer:number[]=[];
// // //         for(let i=100; i<1000; i++){
// // //             console.log()
// // //         }
// // //         return answer;
// // // };

// // // console.log(findEvenNumbers([2,1,3,0]))

// // function majorityElement(nums: number[]): number[] {
// //         if(nums.length ===1) return nums;
// //        let answer:number[]=[];
// //         let checkCount:number=nums.length/3;
// //         const hash:{[key:string]:number}={};
// //         console.log(hash)
// //         nums.forEach((num:number)=>{
// //              if(!(num in hash)) hash[num]=1;
// //              else hash[num]++;
// //         })
// //         return Object.entries(hash).filter(([key, value])=>value>checkCount).map(([key, value])=>+key);
// // };

// // // console.log(majorityElement([-1,-1, -1]));

// // function sortEvenOdd(nums: number[]): number[] {
// //      let evenNumber:number[]=[];
// //      let evenIndex:number[]=[]
// //      let oddNumber:number[]=[];
// //      let oddIndex:number[]=[]
// //      for(let i=0; i<nums.length; i++) {
// //           if(i % 2 === 0){
// //               evenNumber.push(nums[i]);
// //               evenIndex.push(i);
// //           }else{
// //             oddNumber.push(nums[i]);
// //             oddIndex.push(i);
// //           }
// //      }
// //      evenNumber.sort((a:number, b:number) => a - b);
// //      oddNumber.sort((a:number, b:number) => b-a);
// //      for(let i=0; i<evenIndex.length; i++){
// //           nums[evenIndex[i]]=evenNumber[i];
// //      }
// //      for(let i=0; i<oddIndex.length; i++){
// //         nums[oddIndex[i]]=oddNumber[i];
// //      }
// //      return nums;
// // };


// // // console.log(sortEvenOdd([36,45,32,31,15,41,9,46,36,6,15,16,33,26,27,31,44,34]));

// // // [9,46,15,45,15,41,27,34,32,31,33,31,36,26,36,16,44,6]


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// // function singleNumber(nums: number[]): number {
// //      if(nums.length===1) return nums[0];
// //      let answer:number=0;
// //      let results:{[key:string]:number}= {};
// //      const sortedArray:number[]=nums.sort((a:number,b:number)=>a-b);
// //      sortedArray.forEach((num:number)=>{
// //            if(!(num in results)) results[num]=1;
// //            else results[num]++;
// //      })
// //      return +Object.entries(results).filter(([key, value])=>value===1).map(([key, value])=>+key).join("");
// // };


// // // console.log(singleNumber([2,2,1]))


// // // var threeSum = function(nums:number[]):number[][] {
// // //     let len:number = nums.length;
// // //     let opArr:number[][] = []
// // //     nums.sort((a:number,b:number) => a-b);
// // //     for(let i=0; i<len-2; i++){
// // //         let L:number = i+1;
// // //         let R:number = len-1;
// // //         let sum:number=0-nums[i];
// // //         while(L<R){
// // //          if(sum===(nums[L]+nums[R])){
// // //                opArr.push([nums[i], nums[L], nums[R]])
// // //                while(L<R && nums[L]===nums[L+1]) L++;
// // //                while(L<R && nums[R]===nums[R-1]) R--;
// // //                L++;
// // //                R--;
// // //          }else if((nums[L]+nums[R]) > sum) R--;
// // //           else L++;
// // //         }
// // //     }
// // //     return opArr;
// // // };

// // var threeSum = function(nums:number[]):number[][] {
// //     let len:number = nums.length;
// //     let opArr:number[][] = [];
// //     let i=0;
// //     let j=0;
// //     let k=0;
// //     let index=0;
// //     while(index<((len-1) * (len-1) * (len-1))){
// //         // console.log("While")
// //         if(i!==j && i!==k && j!== k && ((nums[i]+nums[j]+nums[k])===0)){
// //             //  console.log("IF")
// //              let found=opArr.find((element)=>{
// //                 //  let mySet:Set<number> = new Set<number>(element);
// //                  let mySet2:Set<number> = new Set<number>([nums[i],nums[j],nums[k]]);
// //                  for(let l = 0; l < 3; l++){
// //                      if(!mySet2.has(element[l])) return false;
// //                  }
// //                  return true;
// //              })
// //              if(!found) {
// //                 opArr.push([nums[i], nums[j], nums[k]]);
// //              }
// //         }
// //         i++;
// //         if(i===len){
// //              i=0;
// //         }
// //         j++;
// //         if(j===len){
// //              j=0;
// //              i++;
// //              if(i===len){
// //                   i=0;
// //              }
// //         }
// //         k++;
// //         if(k==len){
// //              k=0;
// //              j++;
// //              if(j===len){
// //                   j=0;
// //                   i++;
// //                   if(i===len){
// //                        i=0;
// //                   }
// //              }
// //         }

// //         index++;

// //     }
// //       return opArr;
// // };

// // // console.log(threeSum([-1,0,1,2,-1,-4]))

// // function heightChecker(heights: number[]): number {
// //      let sortedHeight:number[]=[...heights].sort((a:number,b:number)=>a-b);
// //      console.log(sortedHeight);
// //      let count:number=0;
// //      for(let i=0;i<sortedHeight.length;i++) {
// //           if(heights[i]!==sortedHeight[i]) count++;
// //      }
// //      console.log(count)
// //      return count;
// // };

// // // console.log(heightChecker([1,2,3,4,5]));

// // // Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k.

// // // Note that every number in the answer must not have leading zeros. For example, 01 has one leading zero and is invalid.

// // // You may return the answer in any order.

// // function numsSameConsecDiff(n: number, k: number): number[] {
// //        let mySet:Set<number> = new Set<number>();
// //        let answer:number[] = [];
// //        for(let i=1;i<=9;i++) helperMethod(n,k, ""+i, mySet);
// //        answer=Array.from(mySet.values())
// //        function helperMethod(digitLength: number, digitSubAdd: number, value:string, resultSet: Set<number>):void{
// //                   if(value.length===digitLength){
// //                         resultSet.add(+value);
// //                         return;
// //                   }
// //             let previousValue:number=+value.charAt(value.length-1);
// //              if((previousValue+digitSubAdd) <=9) helperMethod(n,digitSubAdd, value+""+(previousValue+digitSubAdd), mySet);
// //              if((previousValue-digitSubAdd) >=0) helperMethod(n,digitSubAdd, value+""+(previousValue-digitSubAdd), mySet);
// //        }
// //        return answer;
// // };

// // function intersecte(arr1:number[][],numArr:number[]):any {
// //     let found=arr1.find((element:any)=>{
// //         //  let mySet:Set<number> = new Set<number>(element);
// //          let mySet2:Set<number> = new Set<number>([numArr[0], numArr[1], numArr[2]]);
// //          console.log(mySet2)
// //          for(let l = 0; l < 3; l++){
// //              if(!mySet2.has(element[l])) return false;
// //          }
// //          return true;
// //      })
// //      console.log(found)
// //      return found;
// // }

// // // console.log(intersecte([[1,2,3]], [4,5,6]));




// // // console.log(numsSameConsecDiff(3,7));


// // function removeElement(nums: number[], val: number): number {
// //     let answer:number=0;
// //     let currentIndex:number=nums.indexOf(val);
// //     while(currentIndex > -1){
// //          nums.splice(currentIndex,1);
// //          currentIndex=nums.indexOf(val);
// //     }
// //     return nums.length;

// // };

// // // console.log(removeElement([0,1,2,2,3,0,4,3], 2));
// // // Input: nums = [3,2,2,3], val = 3
// // // Output: 2, nums = [2,2,_,_]
// // // Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// // // It does not matter what you leave beyond the returned k (hence they are underscores).

// // function removeDuplicates(nums: number[]): number {
// //     let answer:number=0;
// //     let previousValue:number|undefined;
// //     for(let i=0; i<nums.length; i++){
// //          if( typeof previousValue==="undefined" || previousValue!==nums[i] ){
// //                 previousValue=nums[i];
// //                 continue;
// //          }

// //          if(previousValue===nums[i]){
// //               nums.splice(i, 1);
// //               --i;
// //          }
// //     }
// //     return nums.length;
// // };

// // // console.log(removeDuplicates([1,1,2]));
// // // [0,0,1,1,2,2,3,3,4]


// // function maxArea(height: number[]): number {
// //     if((height.length==1)) return height[0];
// //     let answer:number= -Infinity;
// //     let i=0;
// //     let end:number=height.length-1;
// //     while(i<end){
// //         console.log(height[i]);
// //         const val1:number=height[i];
// //         const val2:number=height[end];
// //         console.log(Math.max(answer, ((end-i)* Math.min(val1, val2))))
// //         answer=Math.max(answer, (end-i)* Math.min(val1, val2))
// //         val1 > val2 ? end --: i++;
// //     }
// //     return answer;
// // };

// // // console.log(maxArea(
// // //     [1,8,6,2,5,4,8,3,7]));


// // //  Definition for singly-linked list.
// class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
//   }

//   function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     let dummyNode:ListNode=new ListNode(-Infinity);
//     let L3 = dummyNode;
//     let carry:number=0;
//           while(l1!==null || l2!==null){
//                let temp1:number= (l1!==null) ? l1.val : 0;
//                let temp2:number= (l2!==null) ? l2.val : 0;
//                let sum:number=temp1+temp2+carry;
//                carry=Math.floor(sum/10);
//                let remainder=Math.floor(sum%10);
//                let newNode:ListNode=new ListNode(remainder);
//                L3.next=newNode;
//                if(l1 !==null) l1=l1.next;
//                if(l2 !==null) l2=l2.next;
//                L3=L3.next;
//           }
//         if(carry>0){
//            let new1Node:ListNode=new ListNode(carry);
//            L3.next=new1Node;
//            L3=L3.next;
//         }  

//   return dummyNode.next;
// };
// // const newArr1=[9,0,0];
// // const newArr2=[9,0,0];
// // let list1:ListNode=new ListNode(newArr1[0]);
// // list1.next=new ListNode(newArr1[1]);
// // list1.next.next=new ListNode(newArr1[2]);
// // let list2:ListNode=new ListNode(newArr2[0]);
// // list2.next=new ListNode(newArr2[1]);
// // list2.next.next=new ListNode(newArr2[2]);
// // console.log(list1, list2);

// // console.log(addTwoNumbers(list1, list2))


// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//         if(head===null || head.next===null) return null;
//         let dummyHead:ListNode|null=new ListNode(-Infinity);
//         dummyHead.next=head;
//         let fastPointer:any=dummyHead;
//         let slowPointer:any=dummyHead;
//         let i=1;
//         while(i<=n+1 && fastPointer!=null){
//             fastPointer=fastPointer.next;
//             i++;
//             //////4////
//         }
//         while(fastPointer!=null){
//             slowPointer=slowPointer.next;
//             fastPointer=fastPointer.next;
//         }
//         slowPointer.next=slowPointer.next.next
//         return dummyHead.next
// };
// // const newArr=[1,2,3,4,5];
// // const listNode:ListNode= new ListNode(1);
// // console.log(listNode)
// // listNode.next=new ListNode(2);
// // listNode.next.next=new ListNode(3);
// // listNode.next.next.next=new ListNode(4);
// // listNode.next.next.next.next=new ListNode(5);

// // console.log(removeNthFromEnd(listNode, 1))

// function hasCycle(head: ListNode | null): boolean {
//       if(head === null || head.next === null) return false;
//       let slowNode:any=head;
//       let fastNode:any=head.next;
//       while(slowNode !== fastNode){
//           if(fastNode === null || fastNode.next === null){
//                return false;
//           }
//           slowNode=slowNode.next;
//           fastNode=fastNode.next.next;
//       }
//      return true;
// };
// // const arr=[3,2,0,-4]
// // let hasCycleNode=new ListNode(3);
// // hasCycleNode.next=new ListNode(2);
// // hasCycleNode.next.next=new ListNode(0);
// // hasCycleNode.next.next.next=new ListNode(-4);
// // hasCycleNode.next.next.next.next=hasCycleNode.next;
// // console.log(hasCycleNode, "NODE");
// // console.log(hasCycle(hasCycleNode));

// function reverseLinkLists(list:ListNode|null):ListNode|null {
//     let currentNode: ListNode | null = list;
//     let previousNode: ListNode | null = null;
//     let nextNode: ListNode | null = null;
//     while(currentNode) {
//           nextNode = currentNode.next;
//           currentNode.next=previousNode;
//           previousNode=currentNode;
//           currentNode=nextNode;
//     }
//     return previousNode;
// }
// function isPalindrome(head: ListNode | null): boolean {
//          if(head==null || head.next ===null) return false;
//          let fastPointer: any = head;
//          let slowPointer: any = head;
//          let newHead:ListNode|null=head;
//          let length:number=0;
//          while(fastPointer && fastPointer.next){
//              slowPointer=slowPointer.next;
//              fastPointer=fastPointer.next.next;
//              length++;
//          }
//          let reverseLinkList:ListNode|null=reverseLinkLists(slowPointer);
//          while(length){
//              length--
//              if(reverseLinkList && newHead && reverseLinkList.val !== newHead.val)return false;
//              else{
//                 if(reverseLinkList&& reverseLinkList.next)reverseLinkList=reverseLinkList.next;
//                 if(newHead&&newHead.next)newHead=newHead.next;
//              }
//          }
//          return true         
// };  
// const arr=[1,2,2,1]
// // let isPalindromeNode=new ListNode(1);
// // isPalindromeNode.next=new ListNode(2);
// // isPalindromeNode.next.next=new ListNode(2);
// // isPalindromeNode.next.next.next=new ListNode(1);

// // console.log(isPalindromeNode,"==> INCOMING NODE");
// // console.log(isPalindrome(isPalindromeNode))

// function isPalindrome1(s: string): boolean {
//       let mainString:string=s.replace(/[^A-Z0-9]/ig, "").trim();
//       let middle:number=Math.floor(mainString
//         .length/2);
//     //   console.log(mainString, "==>Middle")
//       let reverseString:string=mainString.substring(middle);
//       let mainStringPointer:number=0;
//       let reverseStringLength:number=reverseString.length-1;
//     //   console.log(reverseString, "==>ReverseSegment ")
//       while(reverseStringLength>=0){
//                console.log(reverseString[reverseStringLength], "MATCHING", mainString[mainStringPointer])
//               if(reverseString[reverseStringLength].toLowerCase() !== mainString[mainStringPointer].toLowerCase()){
//                     return false;
//               }
//               reverseStringLength--;
//               mainStringPointer++;
//       }
//     //   console.log(reverseString, "==>ReverseSegment ")

//      return true;
// };


// // console.log(isPalindrome1("A man, a plan, a canal: Panama"), "===>Answer")


// function removeElements(head: ListNode | null, val: number): ListNode | null {
//          while(head && head.val===val){
//               head=head.next;
//          }

//          let currentNode: ListNode | null = head;
//          while(currentNode!==null && currentNode.next!==null){
//                if(currentNode.next.val===val){
//                     currentNode.next=currentNode.next.next;
//                }else{
//                 currentNode=currentNode.next;
//                }
//          }

//      return head;
// };


// function deleteNode(root: ListNode | null): void {
//        console.log(root, "===> ROOT NDOE")
// };
// const arr2=[4,5,1,9]
// const removeEleList=new ListNode(4);
// removeEleList.next=new ListNode(5);
// removeEleList.next.next=new ListNode(1);
// removeEleList.next.next.next=new ListNode(9);
// // removeEleList.next.next.next.next=new ListNode(4);
// // removeEleList.next.next.next.next.next=new ListNode(5);
// // removeEleList.next.next.next.next.next.next=new ListNode(6);
// // console.log(deleteNode(removeEleList.next))

// function middleNode(head: ListNode | null): ListNode | null {
//     ///Floyd's Algorithm
//       if(head===null) return head;
//       let slow:any=head;
//       let fast:ListNode|null=head;
//       while(fast!=null&& fast.next!==null){
//            fast=fast.next.next;
//            slow=slow.next;
//       }
//      return slow;
//  };
// //  const middleList:ListNode=new ListNode(1);
// //  middleList.next=new ListNode(2);
// // middleList.next.next=new ListNode(3);
// // middleList.next.next.next=new ListNode(4);
// // middleList.next.next.next.next=new ListNode(5);
// // middleList.next.next.next.next.next=new ListNode(6);
// //  console.log(middleNode(middleList))

// function getDecimalValue(head: ListNode | null): number {
//         let answer:number=0;
//         let count:number=0;
//         let currentHead:ListNode|null = head;
//         let reverseList:ListNode|null=reverseLinkLists(head)
//         while(reverseList!==null){
//             answer+=reverseList.val * Math.pow(2,count);
//             count++;
//             reverseList=reverseList.next;
//         }
//         return answer;
// };
// // const newArr=[1,0,1];
// // const decimalNode: ListNode=new ListNode(0);
// // decimalNode.next = new ListNode(0);
// // decimalNode.next.next = new ListNode(1);

// // console.log(getDecimalValue(decimalNode));
// function deleteMiddle(head: ListNode | null): ListNode | null {
//          let dummyNode:ListNode=new ListNode(-Infinity);
//          dummyNode.next = head
//          let current:ListNode | null=head;
//          let fast:any=head;
//          let slow:any=head;
//          let previous:any=null
//          while(fast!==null && fast.next !==null){
//                previous=slow;
//                fast=fast.next.next;
//                slow=slow.next;
//          }
//          if(!previous){
//              return null;
//          }
//          previous.next=slow.next;
//          return dummyNode.next;
// };
// const newArr3=[1,1,1,1]
// const deleteMiddleNode=new ListNode(newArr3[0]);
// deleteMiddleNode.next = new ListNode(newArr3[1]);
// deleteMiddleNode.next.next = new ListNode(newArr3[2]);
// deleteMiddleNode.next.next.next = new ListNode(newArr3[3]);
// // deleteMiddleNode.next.next.next.next = new ListNode(newArr3[4]);
// // deleteMiddleNode.next.next.next.next.next = new ListNode(newArr3[5]);
// // deleteMiddleNode.next.next.next.next.next.next = new ListNode(newArr3[6]); 
// // console.log(deleteMiddle(deleteMiddleNode))

// function pairSum(head: ListNode | null): number {
//         let answer:number=0;
//         let currentNode:ListNode|null = head;
//         let previousNode:any = head;
//         let length:number=0;
//         while(currentNode){
//              length++;
//              currentNode = currentNode.next;   
//         }
//         let newArr:number[] = new Array(length);
//         let i=0;
//         while(previousNode!==null){
//              newArr[i]=previousNode.val;
//              i++;
//              previousNode=previousNode.next;
//         }
//         for(let i=0; i<length/2; i++){
//              let sum=newArr[i]+newArr[length-1-i];
//              answer=Math.max(sum, answer);
//         }
//         return answer;
// };

// // const arr3=[4,2,2,3];
// // const pairSumNode:ListNode=new ListNode(4);
// // pairSumNode.next=new ListNode(2);
// // pairSumNode.next.next=new ListNode(2);
// // pairSumNode.next.next.next=new ListNode(3);
// // console.log(pairSum(pairSumNode));
// //Different Solution////
// // function pairSum(head: ListNode | null): number {
// //         let answer:number=0;
// //         let currentNode:ListNode|null = head;
// //         let reverseNode:ListNode|null = reverseLinkLists(currentNode);
// //         while(head !==null && reverseNode !== null) {
// //              let sum:number=head.val+reverseNode.val;
// //              answer=Math.max(answer, sum);
// //              reverseNode=reverseNode.next;
// //              head=head.next;
// //         }
// //         return answer;
// // };

// function swapPairs(head: ListNode | null): ListNode | null {
//            if(head == null) return null;
//            let dummyHead:ListNode=new ListNode(-Infinity);
//            dummyHead.next = head;
//            let currentHead:any = dummyHead;
//            while(currentHead.next != null && currentHead.next.next != null){
//                  let firstNode=currentHead.next;
//                  let secondNode=currentHead.next.next;
//                  firstNode.next = secondNode.next;
//                  currentHead.next = secondNode;
//                  currentHead.next.next=firstNode;
//                  currentHead=currentHead.next.next;
//            }
//            return dummyHead.next;
// };
// // const myArr=[1,2,3,4]
// // const swapPairsNode=new ListNode(1);
// // swapPairsNode.next= new ListNode(2);
// // swapPairsNode.next.next= new ListNode(3);
// // swapPairsNode.next.next.next= new ListNode(4);
// // console.log(swapPairs(swapPairsNode))



// function rotateRight(head: ListNode | null, k: number): ListNode | null {
//        if(head===null) return head;
//        let tail=head;
//        let length:number=0;
//        while(tail.next!==null){
//            tail=tail.next;
//            length++;
//        }
//        tail.next=head;
//        let current:ListNode|any=head;
//        k=k%length;
//        console.log(k)
//        let jump=length-k;
//        while(jump){
//           current=current.next;
//           jump--;
//        }
//        let otherSide=current.next;
//        current.next=null;
//        return otherSide;
// };


// // const myNode=new ListNode(0);
// // myNode.next = new ListNode(1);
// // myNode.next.next=new ListNode(2);
// // // myNode.next.next.next=new ListNode(4);
// // // myNode.next.next.next.next=new ListNode(5);
// // console.log(rotateRight(myNode, 4));

// function rotate(nums: number[], k: number): void {
//      let numsLength=nums.length;
//      let jump:number=k%numsLength;
//      console.log(jump, "JUMP")
//      if(jump!==0){
//          nums.reverse();
//         const reverseValK:number[]=nums.splice(0, jump);
//         reverseValK.reverse();
//         const restValue:number[]=nums.splice(0).reverse();
//         nums.unshift(...reverseValK,...restValue);
//         console.log(nums,"NUMS")
//      }

// };


// // console.log(rotate([1,2,3,4,5,6,7], 3))


// function partition(head: ListNode | null, x: number): ListNode | null {

//     let List1:ListNode=new ListNode(-Infinity);
//     let List2:ListNode=new ListNode(-Infinity);
//     let L1 =List1;
//     let L2=List2;

//     while(head!==null){
//          if(head.val < x){
//              L1.next=head;
//              L1=L1.next;
//          }else{
//              L2.next=head;
//              L2=L2.next;
//          }
//          head=head.next;
//     }
//     L1.next=List2.next;
//     L2.next=null;
//     return List1.next;

// };
// const arre= [1,4,3,2,5,2];
// const partitionNode=new ListNode(1);
// partitionNode.next=new ListNode(4);
// partitionNode.next.next=new ListNode(3);
// partitionNode.next.next.next=new ListNode(2);
// partitionNode.next.next.next.next=new ListNode(5);
// partitionNode.next.next.next.next.next=new ListNode(2);
// // console.log(partition(partitionNode,3))

// function pivotArray(nums: number[], pivot: number): number[] {
//      let left:number[]=[];
//      let right:number[]=[];
//      let equal:number[]=[];

//      for (let key in nums){
//           if(nums[key] < pivot){
//                left.push(nums[key]);
//           }else if(nums[key] > pivot){
//               right.push(nums[key]);
//           }else if(nums[key] == pivot){
//              equal.push(nums[key]);
//           }
//      }
//      return [...left,...equal,...right];    
// };
// // console.log(pivotArray([9,12,5,10,14,3,10], 10))
// ///9, 12, 5, 10, 14, 3, 10

// function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
//            if(head===null) return head;
//            let dummyHead: ListNode | null = new ListNode(-Infinity);
//            dummyHead.next=head;
//            let Leftprevious: ListNode | any=dummyHead;
//            let current: ListNode | any=head;
//            console.log(current, "CURRENT");
//            console.log(Leftprevious, "LEFT PREVIOUS")
//            let leftJump:number=left-1;
//            while(leftJump>0){
//                Leftprevious=current;
//                current=current.next;
//                leftJump--;
//            }
//            console.log(current, "CURRENT1");
//            console.log(Leftprevious, "LEFT PREVIOUS1")
//            let prev:ListNode|null=null;
//            let nextNode:ListNode;
//            let jumpRight:number=(right-left)+1;
//            while(jumpRight>0){
//                nextNode=current.next;
//                current.next=prev;
//                prev=current;
//                current=nextNode;
//                jumpRight--;
//            }
//            console.log(current, "CURRENT2");
//            console.log(Leftprevious, "LEFT PREVIOUS2")
//            console.log(prev, "PREVIOUS2")
//            Leftprevious.next.next=current;
//            Leftprevious.next=prev;
//       return dummyHead.next;
// };

// const reverseBetweenNode=new ListNode(5);
// // reverseBetweenNode.next=new ListNode(5);
// // reverseBetweenNode.next.next=new ListNode(3);
// // reverseBetweenNode.next.next.next=new ListNode(4);
// // reverseBetweenNode.next.next.next.next=new ListNode(5);

// // console.log(reverseBetween(reverseBetweenNode, 1,1));

// function detectCycle(head: ListNode | null): ListNode | null {
//       if(head===null|| head.next===null) return head;
//        let slowNode:ListNode|any = head;
//        let fastNode:ListNode|any = head;
//        let matched:boolean=false;
//        while(fastNode && fastNode.next){
//              slowNode=slowNode.next;
//              fastNode=fastNode.next.next;
//              if(fastNode=== slowNode){
//                   matched=true;
//                   break;
//              }
//        }
//      //Now make any of the pointer, point to the head. start incrementing one by one when they meet, that would be the point where the cycle starts.
//      fastNode=head;
//      while(slowNode!==fastNode){
//           slowNode=slowNode.next;
//           fastNode=fastNode.next;
//      }
//       return slowNode;
// };
// const detectCycleArr=[3,2,0,-4]
// const detectCycleNode=new ListNode(1);
// detectCycleNode.next=new ListNode(2);
// detectCycleNode.next.next=detectCycleNode.next;
// // detectCycleNode.next.next = new ListNode(0);
// // detectCycleNode.next.next.next = new ListNode(-4);
// // detectCycleNode.next.next.next.next=detectCycleNode.next;
// // console.log(detectCycle(detectCycleNode));


// function mergeNodes(head: ListNode | null): ListNode | null {
//           if(head===null) return head;
//           while(head!==null && head.val===0){
//                head=head.next;
//           }
//           let result:ListNode|any = head;
//           let temp:ListNode|any = head;
//           let sum=0;
//           while(temp!==null){
//                if(temp.val!==0){
//                    sum+=temp.val;
//                    temp=temp.next;
//                }else{
//                   result.val=sum;
//                   sum=0;
//                   result.next = temp.next;
//                   temp=temp.next;
//                   result=result.next;
//                }
//           }
//       return head;    
// };
// const mergeNodeArr=[0,3,1,0,4,5,2,0]
// const mergeNode = new ListNode(0);
// mergeNode.next=new ListNode(3);
// mergeNode.next.next = new ListNode(1);
// mergeNode.next.next.next = new ListNode(0);
// mergeNode.next.next.next.next = new ListNode(4);
// mergeNode.next.next.next.next.next = new ListNode(5);
// mergeNode.next.next.next.next.next.next = new ListNode(2);
// mergeNode.next.next.next.next.next.next.next = new ListNode(0);

// // console.log(mergeNodes(mergeNode));
//  function getMiddle(head:ListNode):ListNode {
//       let slowPointer:ListNode|any = head;
//       let fastPointer:ListNode|any = head.next;
//       while(fastPointer && fastPointer.next){
//            slowPointer = slowPointer.next;
//            fastPointer = fastPointer.next.next;
//       }
//       return slowPointer;
//  }

//  function mergeNodes1(left:ListNode|any, right:ListNode|any):ListNode|null{
//        let dummyNode:ListNode=new ListNode(-Infinity);
//        let tail:ListNode|any=dummyNode;
//        while(left && right){
//             if(left.val < right.val){
//                  tail.next = left;
//                  left=left.next;
//             }else{
//                 tail.next = right;
//                 right=right.next;
//             }
//             tail=tail.next;
//         }
//         if(left!==null){
//              tail.next = left;
//         }else if(right!==null){
//              tail.next = right;
//         }
//       return dummyNode.next
//  }



// function sortList(head: ListNode | null): ListNode | null {
//         if(head === null|| head.next === null) return head;

//        //Split the List into two lists
//        let left:ListNode|any=head;
//        let right:ListNode|any=getMiddle(head);
//        let temp=right.next;
//        right.next = null;
//        right=temp;
//        left = sortList(left);///Keep spliting util there is only one node
//        right = sortList(right);//same as above
//        return mergeNodes1(left,right);   //Merge the two nodes list together
// };

// const sortListArray=[4,2,1,3];
// const sortListNode=new ListNode(4);
// sortListNode.next = new ListNode(2);
// sortListNode.next.next = new ListNode(1);
// sortListNode.next.next.next = new ListNode(3);
// // console.log(sortList(sortListNode));


// function getMaximumGenerated(n: number): number {
//        let i=1;
//        let results:number[]=[];
//        results.push(0);
//        results.push(1);
//        while((i*2)+1<=n){
//           results[i*2]=results[i];
//           results[i*2+1]=results[i]+results[i+1];
//           i++;
//        }
//        console.log(results)
//        return Math.max(...results);
// };


// // console.log(getMaximumGenerated(3))

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//          if(headA===null || headB===null) return null;
//          let List1:ListNode |any = headA;
//          let List2:ListNode |any = headB;
//          while(List1!==List2){
//             if(List1===null){
//                List1=headB
//             }else{
//                List1=List1.next;
//             };
//             if(List2===null){
//                List2=headA
//             }else{
//                List2=List2.next;
//             };
//          }
//          console.log(List1, List2);
//          return List1;
// };
// const intersectionA=[4,1,8,4,5];
// const intersectionB=[5,6,1,8,4,5]
// const intersectionNodeA = new ListNode(4);
// intersectionNodeA.next = new ListNode(1);
// intersectionNodeA.next.next = new ListNode(8);
// intersectionNodeA.next.next.next = new ListNode(4);
// intersectionNodeA.next.next.next.next = new ListNode(5);
// const intersectionNodeB =new ListNode(5);
// intersectionNodeB.next = new ListNode(6);
// intersectionNodeB.next.next = new ListNode(1);
// intersectionNodeB.next.next.next = new ListNode(8);
// intersectionNodeB.next.next.next.next = new ListNode(4);
// intersectionNodeB.next.next.next.next.next = new ListNode(5);

// // console.log(getIntersectionNode(intersectionNodeA, intersectionNodeB))

// function reorderList(head: ListNode | null): void {
//      if(head===null) return;
//      let slowPointer:ListNode|any = head;
//      let fastPointer = head.next;
//      while(fastPointer && fastPointer.next){
//             slowPointer = slowPointer.next;
//             fastPointer = fastPointer.next.next;
//      }
//      let secondList:ListNode|any = slowPointer.next;
//      slowPointer.next = null;
//      let previousNode:ListNode|any = null;
//      let nextNode:ListNode|any;
//      while(secondList){
//            nextNode = secondList.next;
//            secondList.next = previousNode;
//            previousNode = secondList;
//            secondList = nextNode;
//      }
//      secondList = previousNode;
//      let firstList:ListNode|any = head;
//      while(secondList){
//           let temp1:ListNode|any = firstList.next;
//           let temp2:ListNode|any = secondList.next;
//           firstList.next = secondList;
//           secondList.next= temp1;
//           firstList = temp1;
//           secondList = temp2;
//      }

// };
// const listNodeReorder=[1,2,3,4]
// const reorderListNode = new ListNode(1);
// reorderListNode.next = new ListNode(2);
// reorderListNode.next.next = new ListNode(3);
// reorderListNode.next.next.next = new ListNode(4);
// // console.log(reorderList(reorderListNode));

// function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
//           if(list1 === null || list2===null) return null;
//           let temp:ListNode|any=list1;
//           let temp2:ListNode|any=list2;
//           let firstPointer:ListNode|any;
//           let secondPointer:ListNode|any;
//           let index = 0;
//           while(temp){
//                 if(index === a-1) firstPointer = temp;
//                 else if(index === b+1) secondPointer = temp;
//                 index++;
//                 temp=temp.next;

//           }
//           while(temp2.next){
//                 temp2 = temp2.next;
//           }
//           firstPointer.next = list2; 
//           temp2.next=secondPointer
//           return list1;
// };
// const List1 = [0,1,2,3,4,5]
// const List1Node= new ListNode(0);
// List1Node.next = new ListNode(1);
// List1Node.next.next = new ListNode(2);
// List1Node.next.next.next = new ListNode(3);
// List1Node.next.next.next.next = new ListNode(4);
// List1Node.next.next.next.next.next = new ListNode(5);
// const List2 =  [1000000,1000001,1000002];
// const List2Node = new ListNode(1000000);
// List2Node.next = new ListNode(1000001);
// List2Node.next.next = new ListNode(1000002);

// // console.log(mergeInBetween(List1Node,3, 4, List2Node));

// function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
//        let criticalPoint:number[]=[];
//        let temp:ListNode|any=head;
//        while(temp){
//           criticalPoint.push(temp.val);
//           temp=temp.next;
//        }
//        function isCriticalPoint(previous:number, present:number, next:number):boolean{
//              if((previous< present && present > next )|| (previous > present && present < next)){
//                 return true;
//              }
//              return false;
//        }
//        let pos:number[] = [];

//        // Start from index 1 as we are gonna pass
//        // arr[i-1] and at i=0 i-1 becomes -ve
//        // to avoid that error we start from index 1
//        for (let i = 1; i < criticalPoint.length - 1; i++) {

//            // If this point is critical point then it's
//            // index is inserted in the pos array
//            if (isCriticalPoint(criticalPoint[i - 1], criticalPoint[i],
//                criticalPoint[i + 1]))
//                pos.push(i);
//        }
//        let ans:number[] = [];

//        // If the pos array size is either 0 or 1
//        // then we will simply add -1 and -1 to the answer array
//        // as it is not possible to find the max and min
//        // distance with 1 or 0 elements in the array.
//        if (pos.length <= 1) {
//            ans.push(-1);
//            ans.push(-1);
//        }
//        else {

//            // We find the minimum difference between the
//            // positions of the critical points based on the
//            // values of indexes.
//            console.log(pos)
//            let mval = Number.MAX_VALUE;
//            for (let i = 1; i < pos.length; i++)
//                mval = Math.min(mval, pos[i] - pos[i - 1]);
//            ans.push(mval);

//            // Maximum difference will obviously be between
//            // the first and the last element of the pos array.
//            ans.push(pos[pos.length - 1] - pos[0]);
//        }
//        return ans;
// };


// const head = [5,3,1,2,5,1,2];
// const criticalNodes = new ListNode(5);
// criticalNodes.next = new ListNode(3);
// criticalNodes.next.next = new ListNode(1);
// criticalNodes.next.next.next = new ListNode(2);
// criticalNodes.next.next.next.next = new ListNode(5);
// criticalNodes.next.next.next.next.next = new ListNode(1);
// criticalNodes.next.next.next.next.next.next = new ListNode(2);
// // criticalNodes.next.next.next.next.next.next.next = new ListNode(2);
// // criticalNodes.next.next.next.next.next.next.next.next = new ListNode(7);

// // console.log(nodesBetweenCriticalPoints(criticalNodes))

// function isHappy(n:number):boolean {
//      let mySet:Set<number> = new Set<number>();
//      function squareNums(value:number, setStore:Set<number>):boolean{
//           if(value === 1) return true;
//           if(setStore.has(value)) return false;
//           else setStore.add(value);
//           let sum=0;
//           while(value>=1){
//              let digit = value%10;
//              value=Math.floor(value/10);
//              sum+=(digit**2);
//          }
//          return squareNums(sum, setStore)
//      }
//     return squareNums(n, mySet);
//  };

// //  console.log(isHappy(1563712132))
// //  console.log(isHappy(103))


// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//      const hash:{[key:string]:number}={};
//      for(let i = 0;i<nums.length;i++){
//            if(!(nums[i] in hash)){
//                hash[nums[i]]=i;
//            }else{
//                hash[nums[i]]=Math.abs(i-hash[nums[i]]);
//                if(hash[nums[i]]<=k){
//                     return true;
//                }
//            }  
//      }
//      return false;
// };

// // console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))

// // function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
// //           let currentNode: ListNode | null = head;
// //           let dummyNode:ListNode|null = new ListNode(-Infinity);
// //           let startNode: ListNode|null =head;

// //           dummyNode.next = head;
// //           let counter:number=1;
// //           while(currentNode != null){
// //                if(counter%2==0){

// //                }else{
// //                     let newCounter:number=counter;
// //                     while(newCounter>0&& currentNode){
// //                          currentNode=currentNode.next;
// //                          newCounter--;
// //                     }
// //                    counter++;
// //                }
// //           }

// //           function recursiveReverseLinkList(start:ListNode, end:ListNode, count:number):any{
// //                  if(start.next===null) return start;
// //                  let previousNode:ListNode|any = start;
// //                  let currentNode:ListNode|any = start.next;
// //                  let tail:ListNode|any = start.next;

// //                  for(let i=0; i<count; i++){
// //                       const next = currentNode.next;
// //                       currentNode.next = previousNode;
// //                       previousNode = currentNode;
// //                       currentNode = next;
// //                  }
// //                  start.next = previousNode;
// //                  tail.next = end;
// //                  return;
// //           }

// //           return dummyNode.next;
// // };
// const headu = [5,2,6,3,9,1,7,3,8,4]
// const heheNode = new ListNode(5);
// heheNode.next = new ListNode(2);
// heheNode.next.next = new ListNode(6);
// heheNode.next.next.next = new ListNode(3);
// // heheNode.next.next.next.next = new ListNode(9);
// // heheNode.next.next.next.next.next = new ListNode(1);
// // heheNode.next.next.next.next.next.next = new ListNode(7);
// // heheNode.next.next.next.next.next.next.next = new ListNode(3);
// // heheNode.next.next.next.next.next.next.next.next = new ListNode(8);
// // heheNode.next.next.next.next.next.next.next.next.next = new ListNode(4);
// // console.log(reverseEvenLengthGroups(heheNode))


// function mostFrequentEven(nums: number[]): number {
//         if(nums.length===1) return nums[0]%2===0 ? nums[0]:-1;
//         const myHash:{[key:number]:number}={};
//         let answer:number=0;
//         let i=0;
//         while(i<nums.length){
//            if(nums[i]%2===0){
//                if(!(nums[i] in myHash)){
//                     myHash[nums[i]]=1;
//                }else{
//                     myHash[nums[i]]++;
//                }
//            }
//            i++;
//         }
//         const maxiMum:number=Math.max(...Object.entries(myHash).map(([key,value]) => value));
//         for(let key in myHash){
//              if(myHash[key]===maxiMum){
//                  return +key;
//              }
//        }
//         return -1;
// };


// // console.log(mostFrequentEven([29,47,21,41,13,37,25,7]))

// function threeSumClosest(nums: number[], target: number): number {
//         let answer=0
//         let difference=Number.MAX_SAFE_INTEGER;
//         let sortedArray:number[] =nums.sort();
//         for(let i=0; i<sortedArray.length; i++) {
//               let firstValue:number= sortedArray[i];
//               let firstPointer:number=i+1;
//               let secondPointer:number=sortedArray.length-1;
//               while(firstPointer<secondPointer){
//                    let currentSum:number=firstValue+sortedArray[firstPointer]+sortedArray[secondPointer];
//                    console.log(currentSum, "SORTED ARRAY")
//                    if(firstValue+sortedArray[firstPointer]+sortedArray[secondPointer] === target) return target;
//                    else if(Math.abs(firstValue+sortedArray[firstPointer]+sortedArray[secondPointer]-target)< difference){
//                            difference=Math.abs(firstValue+sortedArray[firstPointer]+sortedArray[secondPointer]-target);
//                            answer=firstValue+sortedArray[firstPointer]+sortedArray[secondPointer];
//                    }
//                    if(firstValue+sortedArray[firstPointer]+sortedArray[secondPointer]>target){
//                        secondPointer--;
//                    }else if(firstValue+sortedArray[firstPointer]+sortedArray[secondPointer]<target){
//                       firstPointer++;
//                    }
//               }
//         }
//         return answer;
// };


// // console.log(threeSumClosest([13,252,-87,-431,-148,387,-290,572,-311,-721,222,673,538,919,483,-128,-518,7,-36,-840,233,-184,-541,522,-162,127,-935,-397,761,903,-217,543,906,-503,-826,-342,599,-726,960,-235,436,-91,-511,-793,-658,-143,-524,-609,-728,-734,273,-19,-10,630,-294,-453,149,-581,-405,984,154,-968,623,-631,384,-825,308,779,-7,617,221,394,151,-282,472,332,-5,-509,611,-116,113,672,-497,-182,307,-592,925,766,-62,237,-8,789,318,-314,-792,-632,-781,375,939,-304,-149,544,-742,663,484,802,616,501,-269,-458,-763,-950,-390,-816,683,-219,381,478,-129,602,-931,128,502,508,-565,-243,-695,-943,-987,-692,346,-13,-225,-740,-441,-112,658,855,-531,542,839,795,-664,404,-844,-164,-709,167,953,-941,-848,211,-75,792,-208,569,-647,-714,-76,-603,-852,-665,-897,-627,123,-177,-35,-519,-241,-711,-74,420,-2,-101,715,708,256,-307,466,-602,-636,990,857,70,590,-4,610,-151,196,-981,385,-689,-617,827,360,-959,-289,620,933,-522,597,-667,-882,524,181,-854,275,-600,453,-942,134],
// //      -2805))


// function maxProfit(prices: number[]): number {
//      let minPrice = prices[0];
//      let profit = 0;

//      for (let currentPrice of prices) {
//        if (currentPrice > minPrice) {
//          profit = Math.max(profit, currentPrice - minPrice);
//        } else {
//          minPrice = currentPrice;
//        }
//      }
//      return profit;
//    }

// // console.log(maxProfit([7,6,4,3,1]))


// function generate(numRows: number): number[][] {
//        let results:number[][] = new Array(numRows);
//        for(let i=0;i<numRows;i++){
//            let row=new Array(i+1);
//            row[0]=1;
//            row[row.length-1]=1;
//            for(let j=1;j<row.length-1;j++){
//              let topRow= results[i-1];
//              row[j]=topRow[j]+topRow[j-1];
//            }
//            results[i]=row;
//        }
//        return results;
// };

// // console.log(generate(5))

// function oddEvenList(head: ListNode | null): ListNode | null {

//      let oddHead:any = head;
//      let evenHead:any=head?.next;
//      let even:any = evenHead;

//      while(evenHead!==null && evenHead.next !==null){
//             oddHead.next = evenHead.next;
//             oddHead = oddHead.next;
//             evenHead.next = oddHead.next;
//             evenHead = evenHead.next;
//      }

//      console.log(evenHead, oddHead, "EVEN HEAD AND ODD HEAD")
//        oddHead.next = even;
//      return head;
// };
// const myHead= [1,2,3,4,5]
// const evenOddNode= new ListNode(1);
// evenOddNode.next = new ListNode(2);
// evenOddNode.next.next = new ListNode(3);
// evenOddNode.next.next.next = new ListNode(4);
// evenOddNode.next.next.next.next = new ListNode(5);

// // console.log(oddEvenList(evenOddNode));


// function getRow(rowIndex: number): number[] {

//      function generateNewRow(rowNumber:number):number[][] {
//           let newArray:number[][]=new Array(rowNumber);
//           for(let i=0;i<rowNumber;i++){
//                 let newRow:number[]=new Array(i+1);
//                 newRow[0]=1;
//                 newRow[newRow.length-1]=1;
//                 for(let j=1;j<newRow.length-1;j++){
//                     let previousRow:number[]= newArray[i-1]
//                     newRow[j] = previousRow[j]+previousRow[j-1];
//                 }
//                 newArray[i]=newRow;
//           }
//           return newArray;  
//      }
//      const newArray:number[][]= generateNewRow(rowIndex+1);
//      return newArray[rowIndex];
// };


// // console.log(getRow(3));

// function minimumTotal(triangle: number[][]): number {
//       let minimumSum:number=0;
//       let loopStep:number=triangle[triangle.length-1].length;

//       return minimumSum;
// };

// // console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]));

// function moveZeroes(nums: number[]): void {
//      let counter:number=0;
//      let zeroArray:number[]=[];
//      let i=0;
//      while (i<nums.length) {
//            if(nums[i]===0){
//                 nums.splice(i,1);
//                 zeroArray.push(0);
//                 i=0;
//            }else{
//                i++;
//            }
//      }
//      nums.push(...zeroArray);
//      console.log(nums, "NUMS")
// };

// // console.log(moveZeroes([0,1,0,3,12]));


// function summaryRanges(nums: number[]): string[] {
//          let results:string[]=[];
//          let currentValue:number=nums[0]
// ;         for(let i=0; i<nums.length; i++) {
//             if(nums[i]+1!==nums[i+1]|| i===nums.length-1){
//           if(currentValue===nums[i]){
//               results.push(`${nums[i]}`);
//           }else{
//                results.push(`${currentValue}->${nums[i]}`)
//           }
//           currentValue=nums[i+1];
//           }

//           }
//          return results;
// };

// // console.log(summaryRanges([0,1,2,4,5,7]))

// function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//        let dummyHead:ListNode|null= new ListNode(-Infinity);
//        return dummyHead;

// };

// const node1=new ListNode(7)
// node1.next = new ListNode(2);
// node1.next.next = new ListNode(4);
// node1.next.next.next = new ListNode(3);
// const node2=new ListNode(7);
// node2.next = new ListNode(8);
// node2.next.next = new ListNode(0);
// node2.next.next.next = new ListNode(8);
// // console.log(addTwoNumbers2(node1, node2));

// function isValid(s: string): boolean {
//      let stack:string[]=[];
//      let closeToOpen:{[key:string]:string}={")": "(", "}": "{","]":"["};
//      for(let i=0; i<s.length; i++) {
//           if(s[i] in closeToOpen){
//                if(stack && stack[stack.length-1]===closeToOpen[s[i]]){
//                     stack.pop();
//                }else{
//                     return false
//                }
//           }else{
//                stack.push(s[i]);
//           }
//      }
//      return stack.length==0 ? true:false;
// };

// // console.log(isValid("{[]}"));
// ///o(n2) Complexity;
// function subArrayRanges(nums: number[]): number {
//        let sum=0;
//        for(let i=0; i<nums.length; i++){
//            let smallEle:number = nums[i];
//            let highEle:number = nums[i];
//            for(let j=i; j<nums.length; j++){
//                 smallEle=Math.min(smallEle, nums[j]);
//                 highEle=Math.max(highEle, nums[j]);
//                 sum+=(highEle-smallEle);
//            }
//        }
//        return sum;
// };
// //O(n) time complexity;

// // function subArrayRanges2(nums: number[]): number {
// //      let sum=0;
// //      const N = nums.map((value:number)=>-value);
// //      console.log(N, "N VALUES");
// //      return getMaxRange(nums)+getMaxRange(N);
// //      function getMaxRange(value:number[]):number{
// //          const S=[-1];
// //          value.push(Infinity);
// //          let res=0;
// //          for(let i=0;i<value.length;i++){

// //              while(nums[S[S.length-1]]<nums[i]){
// //                   let mostMax:number|null=S.pop();
// //                   let leftBoundry=S[S.length-1];
// //                   const leftRange=mostMax - leftBoundry;
// //              }
// //          }
// //      }
// // };


// // console.log(subArrayRanges2([4,-2,-3,4,1]))

// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//        let answer:number[]=[];
//        let hashStore:{[key:number]:number}={};
//        let i=0;
//        let j=0;
//        while(i<nums1.length&&j<nums2.length){
//            if(nums1[i]===nums2[j]){
//                  let start:number=j+1;
//                  let check:boolean=false;
//                  while(start<nums2.length){
//                       if(nums2[start]>nums1[i]){
//                          answer.push(nums2[start]);
//                          check=true;
//                          break
//                       }
//                       start++;
//                  }
//                  if(check==false){
//                     answer.push(-1);
//                  }
//                  i++;
//                  j=0;
//            }else{
//                j++;
//            }
//        }


//        return answer;
// };

// // console.log(nextGreaterElement([2,4],[1,2,3,4]));

//      //3==3

// function singleNumber(nums: number[]): number {
//          let answer:number=0;
//          let hashStore:{[key:number]:number}={};
//          for(let i=0;i<nums.length;i++){
//              if(!(nums[i] in hashStore)){
//                   hashStore[nums[i]]=1;
//              }else{
//                   hashStore[nums[i]]++;
//              }
//          }
//          const miniMumValue=Object.entries(hashStore).filter(([key,value]) =>value==1);
//          const value:number[]=miniMumValue.map(([key,value]) =>{
//               return +key;
//          })
//          return value[0];
// }; 

// // console.log(singleNumber([0,1,0,1,0,1,99]));

// class NumArray {
//      numArray:number[];
//      constructor(nums: number[]) {
//          this.numArray=nums;
//      }

//      sumRange(left: number, right: number): number {
//           if(left<0||left>=this.numArray.length || right<0|| right>=this.numArray.length) return -1;
//           let i=0;
//           let j=this.numArray.length-1;
//           while(i<=j){
//              let middle:number=Math.floor((i+j)/2);
//              if(middle===left){
//                   let sum=0;
//                   let leftInner:number=middle;
//                   while(leftInner<=right){
//                        sum=sum+(this.numArray[leftInner]);
//                        leftInner++;
//                   }
//                   console.log(sum, "SUM")
//                   return sum;
//              }else if(middle>left){
//                   j--;
//              }else{
//                  i++;
//              }
//           }
//           return -1;
//      }
//  }

// //  const numsArray:NumArray=new NumArray([-2, 0, 3, -5, 2, -1]);
// //  console.log(numsArray.sumRange(0,2));
// //  console.log(numsArray.sumRange(2,5));
// //  console.log(numsArray.sumRange(0,5));

// var canCompleteCircuit = function (gas:number[], cost:number[]) {
//      const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
//      const totalCost = cost.reduce((acc, curr) => acc + curr, 0);

//      if (totalCost > totalGas) return -1;

//      for (let i = 0; i < gas.length; i++) {
//        let currGas = 0;
//        let currCost = 0;
//        let j = i;

//        while (j < gas.length && currGas >= currCost) {
//          currGas += gas[j];
//          currCost += cost[j];
//          j++;
//        }

//        if (currGas >= currCost) return i;
//      }

//      return -1;
//    };

// console.log(canCompleteCircuit(
//      [5,1,2,3,4],
//      [4,4,1,5,1]))

//    //1, -3, 1, -2, 3

// function findSubarrays(nums: number[]): boolean {
//       let mySet: Set<number> = new Set<number>();
//       for(let i = 1; i < nums.length; i++) {
//           let sum=nums[i-1]+nums[i];
//           if(mySet.has(sum)) return true;
//           mySet.add(sum);
//       }
//       return false;
// };

// console.log(findSubarrays([4,2,4]));

// function findRestaurant(list1: string[], list2: string[]): string[] {
//      let myHash:{index:number,name:string}[]=[];
//     let minIndex:number=Infinity;
//      for(let i = 0; i < list1.length; i++){
//           let resName=list1[i];
//           let indexInList2=list2.indexOf(resName);
//           if(indexInList2>-1){
//                myHash.push({
//                     index:indexInList2+i,
//                     name:resName
//                });
//                minIndex=Math.min(minIndex, indexInList2+i);
//           }
//      }

//      return myHash.filter(({name,index})=>{
//           return index===minIndex;
//      }).map((item)=>item.name);
// };

// // console.log(findRestaurant(
// //      ["Shogun","Tapioca Express","Burger King","KFC"],
// //      ["KFC","Shogun","Burger King"]));

// function minOperations(logs: string[]): number {
//      let mininumOperation:number=0;

//      for(let i=0;i<logs.length;i++){
//           if(mininumOperation>0 && logs[i].includes("../")){
//                   mininumOperation--;
//           }else if((logs[i].includes("/"))&&!(logs[i].includes("./"))){
//                  mininumOperation++;
//           }
//      }
//      return mininumOperation;
// };

// // console.log(minOperations(["d1/","d2/","../","d21/","./"]))

// function makeGood(s: string): string {
//      let myStack:string[]=[];
//      function isBad(string1:string, string2:string):boolean {
//           return Math.abs(string1.charCodeAt(0) - string2.charCodeAt(0))===32
//      }
//      let i=0;
//      while(i<s.length){
//          myStack.push(s.charAt(i));

//          while(myStack.length>1 && isBad(myStack[myStack.length-2], myStack[myStack.length-1])){
//                myStack.pop();
//                myStack.pop();
//          }

//          i++;
//      }

//      return myStack.join("");
// };

// // console.log(makeGood("leEeetcode"))

// function simplifyPath(path: string): string {
//     let stack:string[]=[];
//     let stringSplit:string[]=path.split("/");
//     console.log(stringSplit, "SSSS")
//     for(let i=0; i<stringSplit.length; i++) {
//         if(stringSplit[i]===".."){
//            stack.pop();
//         }else if(stringSplit[i] && stringSplit[i] !=="."){
//             stack.push(stringSplit[i]);
//         }
//     }
//    return "/"+stack.join("/");
// };

// // console.log(simplifyPath("/home//foo/"))

// function addTwoNumberssd(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//       if(l1===null && l2!==null) return l2;
//       if(l1===null && l2===null) return null;
//       if(l1!==null && l2===null) return l1;
//       function reversingMyLinkList(listNode:ListNode|null):ListNode {
//           let previous:ListNode|any=null;
//           let nextNode:ListNode|any;
//           let current:ListNode|any=listNode;

//           while(current!=null){
//                nextNode=current.next;
//                current.next=previous;
//                previous=current;
//                current=nextNode;
//           }
//           return previous;
//       }
//       let ListNode1:ListNode|any=reversingMyLinkList(l1);
//       let ListNode2:ListNode|any=reversingMyLinkList(l2);
//       console.log(ListNode1, ListNode2, "TWO NODE AFTER REVERSE");
//       let dummyNode:ListNode = new ListNode(-Infinity);
//       let L3:ListNode|any = dummyNode;
//       let carry:number=0;
//       while(ListNode1!==null || ListNode2!==null){
//           let temp1:number= (ListNode1!==null) ? ListNode1.val : 0;
//           let temp2:number= (ListNode2!==null) ? ListNode2.val : 0;
//           let sum:number = temp1+temp2+carry;
//           carry = Math.floor(sum/10);
//           let remainder:number = Math.floor(sum%10);
//           console.log(remainder, "Remainder")
//           L3.next = new ListNode(remainder);

//           if(ListNode1!==null) ListNode1=ListNode1.next;
//           if(ListNode2!==null) ListNode2=ListNode2.next;
//           L3=L3.next;
//       }
//       console.log(carry, "CARRY")
//       if(carry>0){
//           let myNode=new ListNode(carry);
//           L3.next=myNode;
//           L3=L3.next;
//       }
//       return reversingMyLinkList(dummyNode.next)

// };


// const listNode11=new ListNode(5);
// // listNode11.next = new ListNode(2);
// // listNode11.next.next = new ListNode(4);
// // listNode11.next.next.next = new ListNode(3);

// const listNode12=new ListNode(5);
// // listNode12.next= new ListNode(6);
// // listNode12.next.next= new ListNode(4);

// // console.log(addTwoNumberssd(listNode11, listNode12));

// function smallestNumber(pattern: string): string {
//      pattern+="I";
//      let num:number[]=new Array<number>(pattern.length).fill(0);
//      let counter:number=1;
//      let answer:string="";
//      for(let i=0; i<pattern.length; i++) {
//           if(pattern.charAt(i)=="I"){
//                num[i]=counter++;
//                let prev:number=i-1;
//                while(prev>=0 && pattern[prev]=="D"){
//                     num[prev]=counter++;
//                     prev--;
//                }
//           }
//      }

//      for(let i=0; i<pattern.length; i++) {
//           answer+=num[i]
//      }
//      return answer;
// };

// const pattern:string="IIIDIDDD";
// const answer:string=" 1 2 3 5 49876";
// // console.log(smallestNumber(pattern), "PATTERNz");

// function removeStars(s: string): string {
//     let answer:string[]=[];
//     let i=0;
//     while(i<s.length){
//        if(s.charAt(i)==="*"){
//           if(answer[answer.length-1]!=="*"){
//              answer.pop();
//           }
//        }else{
//            answer.push(s.charAt(i));
//        }
//        i++;
//     }
//     return answer.join("");
// };

// // console.log(removeStars("erase*****"))

// function reverseWords(s: string): string {
//     let answer:string='';
//     let splitString:string[]=s.split(" ");
//     console.log(splitString);
//     for(let i=0; i<splitString.length; i++) {
//         splitString[i]=splitString[i].split("").reverse().join("");
//     }
//     return splitString.join(" ");
// };

// // console.log(reverseWords("Let's take LeetCode contest"))

// function decodeString(s: string): string {
//     let answer:string="";
//          let i=0;
//          function decodeRecursion():string{
//              let decodedString:string="";
//              while(i<s.length){
//                  let firstChar:string=s.charAt(i);
//                  if((/\d/).test(firstChar)){
//                     let end=i+1;
//                     while((/\d/).test(s.charAt(end))){
//                          end+=1;
//                     }
//                     let num:number=Number((s.slice(i, end)));
//                     i=end+1;
//                     const decodedValue:string=decodeRecursion();
//                     for(let j=0;j<num;j++){
//                          decodedString+=decodedValue;
//                     }
//                  }else if(firstChar==="]"){
//                     i+=1;
//                     return decodedString;
//                  }else{
//                     decodedString+=firstChar;
//                     i+=1;
//                  }
//              }
//              return decodedString;
//          }
//          return decodeRecursion();
// };

// // console.log(decodeString("3[a]2[bc]"));

// function concatenatedBinary(n: number): number {
//    let modulo:number=10**9+7;
//    let binaryNumber:string[]=[];
//    let i=1;
//    while(i<=n){
//        binaryNumber.push(i.toString(2));
//        i++;
//    }
//    let sum=0
//    function convertToDecimal(str:string, sum:number, multiply:number):number{
//         if(str==="") return sum;
//         let value:number=Number(str.charAt(0));
//         sum+=((value*(2**multiply))%modulo);
//         return convertToDecimal(str.substring(1,str.length), sum, str.substring(1,str.length).length-1);
//    }
//    let value:number=convertToDecimal(binaryNumber.join(""), sum, binaryNumber.join("").length-1);
//    return value;
// };

// // console.log(concatenatedBinary(3));
// //11011

// // function totalSteps(nums: number[]): number {
// //     let results:number=0;
// //     let numsLength:number=nums.length;
// //     const myStack:number[] = [];
// //     const store:number[]=new Array<number>(numsLength).fill(0);
// //     for(let i=numsLength-1; i>=0; i--){
// //        while(myStack.length>0 && nums[i]>nums[myStack[myStack.length-1]]){
// //            let j=myStack.pop();
// //            store[i]=Math.max(store[i]+1, store[j])
// //        }
// //     }
// // };

// // console.log(totalSteps([5,3,4,4,7,3,6,11,8,5,11]));
//                        //5, 4, 4, 7, 3, 6, 11, 8, 5, 11

// function minSwaps(s: string): number {
//       let minCount:number=0;
//       let maxCount:number=0;
//       for(const ch of s){
//           if(ch===']'){
//               minCount++;
//               maxCount=Math.max(maxCount,minCount);   
//           }else{
//                minCount--;
//           }
//       }
//       let answer:number=Math.ceil(maxCount/2);
//       return answer;
// };

// // console.log(minSwaps("][]["))

// function numberOfWeakCharacters(properties: number[][]): number {
//         let answer:number=0;
//         let myStack:number[][]=[];
//         let i=0;
//          properties.sort((a:number[],b:number[]) =>a[0]===b[0] ? b[1]-a[1]: a[0]-b[0])
//         while(i<properties.length){
//             while(myStack.length>0 && myStack[myStack.length-1][0]<properties[i][0] && myStack[myStack.length-1][1]<properties[i][1]){
//                 myStack.pop();
//                 answer++;
//             }

//             myStack.push(properties[i]);
//         }
//      return answer;
// };

// // console.log(numberOfWeakCharacters([[1,5],[10,4],[4,3]]));

// class MinStack {
//      head:ListNode|null;
//      tail:ListNode|null;
//      length:number;
//      constructor() {
//        this.head=null;
//        this.tail=null;
//        this.length=0;
//      }

//      public push(val: number): void {
//         const newNode=new ListNode(val);
//         if(!this.head){
//             this.head=newNode;
//             this.tail=newNode;
//         }else {
//            newNode.next=this.head;
//            this.head=newNode;
//         }
//         this.length++;
//      }

//      public pop(): void {
//         if(!this.head) return;
//         let currentNode=this.head;
//         this.head=currentNode.next;
//         this.length--;
//         if(this.length===0){
//            this.tail=null;
//         }
//      }

//     public top(): number {
//        if(!this.head) return -1;
//        return this.head.val;
//      }

//      public getMin(): number {
//          if(!this.head) return -1;
//          let myList:number[]=[];
//          let currentNode:any=this.head;
//          while(currentNode){
//              myList.push(currentNode.val);
//              currentNode=currentNode.next;
//          }
//          return Math.min(...myList);
//      }
//  }

function backspaceCompare(s: string, t: string): boolean {
    function removeSpace(str: string): string {
        let i = 0;
        let myStack: string[] = [];
        while (i < str.length) {
            if (str.charAt(i) === "#") {
                if (myStack.length > 0) {
                    myStack.pop();
                }
            } else {
                myStack.push(str.charAt(i));
            }
            i++;
        }
        return myStack.join("");
    }
    // console.log(removeSpace(s), removeSpace(t))
    if (removeSpace(s) === removeSpace(t)) {
        return true;
    }
    return false;
};

// console.log(backspaceCompare("xywrrmp","xywrrmu#p"))

function reverseWords(s: string): string {
    let splitString: string[] = s.replace(/  +/g, ' ').split(" ");
    return splitString.reverse().join(" ");
};


console.log(reverseWords("a good   example"));

function nextGreaterElements(nums: number[]): number[] {
    let findValues = (_: any, i: number) => {
        for (let j = 1; j < nums.length; j++) {
            if (nums[(i + j) % nums.length] > nums[i]) {
                return nums[(i + j) % nums.length];
            }
        }
        return -1;
    }
    return nums.map(findValues);
};

// // console.log(nextGreaterElements([1,2,1]))
// nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
function find132pattern(nums: number[]): boolean {
    let myStack: number[] = [];
    let check: any = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < check) return true;
        while (myStack.length && myStack[myStack.length - 1] < nums[i]) {
            check = myStack.pop();
        }
        myStack.push(nums[i]);
    }
    return false;
};
// console.log(find132pattern([3,5,0,3,4]))

function calPoints(operations: string[]): number {
    let answer: number = 0;
    let myStack: number[] = [];
    let i = 0;
    let poppedValue: any = 0;
    while (i < operations.length) {
        if (Number(operations[i])) {
            myStack.push(Number(operations[i]));
        } else if (operations[i] === "C") {
            poppedValue = myStack.pop();
        } else if (operations[i] === "D") {
            myStack.push(2 * myStack[myStack.length - 1]);
        } else if (operations[i] === "+") {
            myStack.push(myStack[myStack.length - 2] + myStack[myStack.length - 1]);
            console.log(myStack)
        }
        i++;
    }
    return myStack.reduce((acc: number, current: number): number => acc + current, 0);
};

// console.log(calPoints(["5","-2","4","C","D","9","+","+"]))

function removeDuplicateLetters(s: string): string {
    let myStack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        let character: string = s.charAt(i);
        if (myStack.indexOf(character) > -1) continue;
        while (myStack.length > 0 && myStack[myStack.length - 1] > character && s.indexOf(myStack[myStack.length - 1], i) > i) {
            myStack.pop();
        }
        myStack.push(character);
    }
    return myStack.join("");
};

// console.log(removeDuplicateLetters('bcabc'));

function timeRequiredToBuy(tickets: number[], k: number): number {
    let time: number = 0;

    while (tickets[k] !== 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[k] === 0) {
                break;
            }
            if (tickets[i] !== 0) {
                tickets[i]--;
                time++;
            }
        }
    }
    return time;
};

// console.log(timeRequiredToBuy([2,3,2],2))

class MyStack {
    head: ListNode | null;
    tail: ListNode | any;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(x: number): void {
        const newNode = new ListNode(x);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(): number {
        if (!this.head) return -1;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return newTail.val;
        } else {
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            return current.val;
        }
    }

    top(): number {
        if (!this.head) return -1;
        let tail = this.tail;
        return tail.val;
    }

    empty(): boolean {
        if (!this.head) return true;
        return false;
    }
}


function firstUniqChar(s: string): number {
    let value: number = 0;
    let myHash: { [key: string]: number } = {}
    if (s.length === 1) return -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] in myHash) {
            myHash[s[i]]++;
        } else {
            myHash[s[i]] = 1
        }
    }

    const vla: [string, number][] = Object.entries(myHash).filter(([key, value]) => value == 1);
    if (vla.length == 0) return -1;
    else return s.indexOf(vla[0][0]);
};

// console.log(firstUniqChar("aabb"));
function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    let dp: number[] = new Array<number>(n + 1).fill(0);
    let result: number = 0;
    let modulo: number = 10 ** 9 + 7;
    dp[1] = 1;
    let noOfPeopleSharingSecrets: number = 0;
    for (let i = 2; i <= n; i++) {
        let j = 1;
        while (j < i) {
            if (i - j >= delay && i - j < forget) {
                dp[i] += dp[j];
                dp[i] %= modulo;
            }
            j++;
        }
    }
    for (let i = 1; i <= n; i++) {
        if (n - i < forget) {
            result = (result + dp[i]) % modulo;
        }
    }
    return result;
};

// console.log(peopleAwareOfSecret(6, 2,4))
// 4Input: nums = [8,2,4,7], limit = 4
// Output: 2 
// Explanation: All subarrays are: 
// [8] with maximum absolute diff |8-8| = 0 <= 4.
// [8,2] with maximum absolute diff |8-2| = 6 > 4. 
// [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
// [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
// [2] with maximum absolute diff |2-2| = 0 <= 4.
// [2,4] with maximum absolute diff |2-4| = 2 <= 4.
// [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
// [4] with maximum absolute diff |4-4| = 0 <= 4.
// [4,7] with maximum absolute diff |4-7| = 3 <= 4.
// [7] with maximum absolute diff |7-7| = 0 <= 4. 
// Therefore, the size of the longest subarray is 2.
function longestSubarray(nums: number[], limit: number): number {
    let incQueue: number[] = [nums[0]];
    let decQueue: number[] = [nums[0]];
    let start: number = 0;
    let end: number = 0;
    let maxLength: number = 1;
    while (end < nums.length - 1) {
        end++;
        while (incQueue.length > 0 && incQueue[incQueue.length - 1] > nums[end]) {
            incQueue.pop();
        }
        incQueue.push(nums[end]);
        while (decQueue.length > 0 && decQueue[decQueue.length - 1] < nums[end]) {
            decQueue.pop();
        }
        decQueue.push(nums[end]);
        while (decQueue[0] - incQueue[0] > limit) {
            if (nums[start] == incQueue[0]) incQueue.shift();
            if (nums[start] == decQueue[0]) decQueue.shift();
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

console.log(longestSubarray([1, 5, 6, 7, 8, 10, 6, 5, 6], 4))

function groupAnagrams(strs: string[]): string[][] {
    const obj: Record<string, string[]> = {};
    for (let str of strs) {
        let chars: number[] = new Array<number>(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            chars[str[i].charCodeAt(0) - 97]++;
        }
        obj[chars.toString()] = [...(obj[chars.toString()] ?? []), str]
    }
    console.log(obj)

    return Object.keys(obj).map(key => obj[key]);
};

//console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]));


class ProductOfNumbers {
    instance: number[];
    constructor() {
        this.instance = [];
    }

    add(num: number): void {
        this.instance.push(num)
    }

    getProduct(k: number): number {
        if (k < 0 || k > this.instance.length) return -1;
        return this.instance.slice((this.instance.length - 1) - k, this.instance.length).reduce((acc: number, current: number): number => acc * current, 1)
    }
}

// let productOfNumbers = new ProductOfNumbers();
// productOfNumbers.add(3);        // [3]
// productOfNumbers.add(0);        // [3,0]
// productOfNumbers.add(2);        // [3,0,2]
// productOfNumbers.add(5);        // [3,0,2,5]
// productOfNumbers.add(4);   
// // console.log(productOfNumbers.instance);     // [3,0,2,5,4]
// console.log(productOfNumbers.getProduct(2));
// console.log(productOfNumbers.getProduct(3));
// console.log(productOfNumbers.getProduct(4));
// productOfNumbers.add(8);
// console.log(productOfNumbers.getProduct(2));

function maxSubarraySumCircular(nums: number[]): number {
    let maxStraightSum: number = Number.MIN_SAFE_INTEGER;
    let tempMaxSum: number = 0;
    let arraySum: number = 0;
    let minStraightSum: number = Number.MAX_SAFE_INTEGER;
    let tempMinSum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        tempMaxSum += nums[i];
        tempMinSum += nums[i];
        arraySum += nums[i];
        minStraightSum = minStraightSum > tempMinSum ? tempMinSum : minStraightSum;
        tempMinSum = tempMinSum > 0 ? 0 : tempMinSum;
        maxStraightSum = maxStraightSum < tempMaxSum ? tempMaxSum : maxStraightSum;
        tempMaxSum = tempMaxSum < 0 ? 0 : tempMaxSum;
    }
    if (arraySum === minStraightSum) {
        return maxStraightSum;
    }
    return Math.max(maxStraightSum, (arraySum - minStraightSum));
};

console.log(maxSubarraySumCircular([-3, -2, -3]))

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
class MyCircularQueue {
    instance: number[];
    k: number;
    head: number;
    count: number;
    constructor(k: number) {
        this.instance = new Array(k).fill(null);
        this.k = k;
        this.count = 0;
        this.head = 0
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.instance[this.head]
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.instance[(this.head + this.count - 1) % this.k];
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        this.instance[(this.head + this.count) % this.k] = value; this.count++;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;
        this.head = (this.head + 1) % this.k;
        this.count--;
        return true;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.k;
    }


}
// let myCircularQueue = new MyCircularQueue(3);
// console.log(myCircularQueue.enQueue(1))
// console.log(myCircularQueue.enQueue(2)); // return True
// console.log(myCircularQueue.enQueue(3)); // return True
// console.log(myCircularQueue.enQueue(4)); // return False
// console.log(myCircularQueue.Rear())  // return 3
// console.log(myCircularQueue.isFull() )  // return True
// console.log(myCircularQueue.deQueue())  // return True
// console.log(myCircularQueue.enQueue(4)); // return True
// console.log(myCircularQueue.Rear()   )  // return 4
// console.log(myCircularQueue.enQueue(1)); // return True

function countStudents(students: number[], sandwiches: number[]): number {
    let hashMap: { [key: string]: number } = {};
    hashMap[1] = students.filter(value => value === 1).length;
    hashMap[0] = students.length - hashMap[1];
    //    console.log(hashMap)

    while (hashMap[sandwiches[0]]) {
        hashMap[sandwiches[0]]--;
        sandwiches.shift();
    }

    return hashMap[1] + hashMap[0];
};

// console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]));

// class MyCircularDeque {
//     constructor(k: number) {

//     }

//     insertFront(value: number): boolean {

//     }

//     insertLast(value: number): boolean {

//     }

//     deleteFront(): boolean {

//     }

//     deleteLast(): boolean {

//     }

//     getFront(): number {

//     }

//     getRear(): number {

//     }

//     isEmpty(): boolean {

//     }

//     isFull(): boolean {

//     }
// }

function findTheWinner(n: number, k: number): number {
    let myArray: number[] = new Array<number>();
    function winner(newArr: number[], index: number, steps: number): number {
        if (newArr.length === 1) return newArr[0];
        index = (index + steps) % newArr.length;
        //  console.log(index)
        newArr.splice(index, 1);
        return winner(newArr, index, steps)
    }
    for (let i = 0; i < n; i++) {
        myArray.push(i + 1)
    }
    let myStep: number = k - 1;
    let index: number = 0;
    return winner(myArray, index, myStep)
};

// console.log(findTheWinner(5,2))

function deckRevealedIncreasing(deck: number[]): number[] {
    let myArray: number[] = new Array<number>(deck.length);
    let sortedArray: number[] = deck.sort((a: number, b: number) => a - b);
    const queue: number[] = [];
    for (let i = 0; i < sortedArray.length; i++) {
        queue.push(i);
    }
    for (let i = 0; i < sortedArray.length; i++) {
        myArray[queue.shift()!] = sortedArray[i];
        queue.push(queue.shift()!);
    }

    return myArray;
};
// Input: deck = [17,13,11,2,3,5,7]
///[2,3,5,7,11,13,17]
// Output: [2,13,3,11,5,17,7]
// console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]))

function sortPeople(names: string[], heights: number[]): string[] {
    let myHash: { [key: string]: string } = {};
    let j = 0;
    let i = 0;
    while (i < names.length && j < heights.length) {
        myHash[heights[j]] = names[i];
        i++;
        j++;
    }
    let keys = Object.keys(myHash).sort((a: string, b: string) => Number(b) - Number(a));
    return keys.map((key: string) => {
        return myHash[key]
    })
};

// console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))
//Mary, Emma, John

function findDisappearedNumbers(nums: number[]): number[] {
    nums.sort((a: number, b: number) => a - b);
    let mySet: Set<number> = new Set<number>(nums);
    let newArr: number[] = []
    let i = 0;
    while (i < nums.length) {
        if (!mySet.has(i + 1)) {
            newArr.push(i + 1)
        }
        i++
    }
    return newArr;
};


// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
///12233478

function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let maxConsectiveNumber: number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            maxConsectiveNumber = Math.max(maxConsectiveNumber, count);
            count = 0;
            // console.log("IF")
        } else {
            // console.log("ELSE")
            count++;
        }
    }

    maxConsectiveNumber = Math.max(maxConsectiveNumber, count);
    return maxConsectiveNumber;
};

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

function findWords(words: string[]): string[] {
    let stringArr: string[] = [];
    let keyPad: string[] = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    words.forEach((word: string) => {
        const letters: string[] = word.toUpperCase().split("");
        keyPad.forEach((row: string) => {
            const check = letters.every((letter: string) => {
                return row.includes(letter);
            })
            if (check) {
                stringArr.push(word);
            }
        })
    })
    return stringArr;
};

// console.log(findWords(["Hello","Alaska","Dad","Peace"]));
//{ 1: "qwertyuiop" }
//{ 2: "asdfghjkl" }
//{ 3: "zxcvbnm" }

// function numRollsToTarget(n: number, k: number, target: number): number {
//     let modulo:number=10**9+7
//      let hashMap:{[key:string]:number}={};
//      for(let i = 1; i <=k; i++) {
//         hashMap[i]=i;
//      }
//      let check:number=k;
//      let checkNumber:number[]=[];
//      for(let i=1;i<=k;i++){
//           checkNumber.push(i);
//      }
//      function checkerdd(num:number, target:number):number{
//          for(let i=1;i<=checkNumber.length;i++){
//               if(num+checkNumber[i]===target){
//                   return checkNumber[i];
//               }
//          }
//          return 0;
//      }
//       console.log(hashMap, "HASHMAP");
//       let j=0;
//       while(j<n-1){
//          for(let key in hashMap){
//             const val:number=checkerdd(hashMap[key], target);
//             console.log(val, )
//              if(val!==-1){
//                  hashMap[key]+=(val)%modulo; 
//              }
//          } 
//          j++;
//       }
//      return Object.entries(hashMap).filter(([key, value])=>value===target).length%modulo;
// };

// console.log(numRollsToTarget(30,30,500));


function longestPalindrome(s: string): string {
    const { length } = s;
    if (length === 1) return s;

    let start: number = 0;
    let windowLength: number = length;
    function isPalindrome(str: string): boolean {
        if (str.length === 1) return true;
        let middle: number = Math.floor((str.length / 2));
        let right: string[] = str.substring(middle).split("").reverse();
        let rightSideLength: number = 0;
        while (rightSideLength < right.length) {
            if (right[rightSideLength] !== str[rightSideLength]) {
                return false
            }
            rightSideLength++;
        }
        return true;
    }
    while (windowLength > 1) {
        const checkString: string = s.substr(start, windowLength);
        const isValid = isPalindrome(checkString);
        if (isValid) return checkString;
        if (start + windowLength === length) {
            start = 0;
            windowLength--;
        } else {
            start++;
        }
    }

    return s[0]

};

// console.log(longestPalindrome("abb"));

// Input: s = ""
// Output: "bab"
// Explanation: "aba" is also a valid answer.

function arrayPairSum(nums: number[]): number {
    let result: number = 0;
    nums.sort((a: number, b: number) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i]
    }
    return result;;
};

// console.log(arrayPairSum([6,2,6,5,1,2]));


function minimumCost(cost: number[]): number {
    cost.sort((a: number, b: number) => b - a);
    if (cost.length === 1) return cost[0];
    if (cost.length === 2) return cost[0] + cost[1];
    let sum: number = 0;
    let i = 0;
    while (i < cost.length - 2) {
        // console.log(cost[i]);
        if (cost[i] + cost[i + 1] > cost[i + 2]) {
            sum += (cost[i] + cost[i + 1]);
            const a = cost.splice(i, i + 3);
            i = 0;
        } else {
            i++;
        }
    }
    sum += cost.length !== 0 ? cost.reduce((acc: number, current: number) => acc + current) : 0;
    return sum;
};

// console.log(minimumCost([6,5,7,9,2,2]))

function checkDistances(s: string, distance: number[]): boolean {
    const { length } = s;
    let letter: number = 0
    let initialValue: number = "a".charCodeAt(0);
    for (let i = 0; i < length; i++) {
        letter = s[i].charCodeAt(0) - initialValue;
        if (distance[letter] >= 0) {
            distance[letter] = -distance[letter] - i - 1;
        } else {
            distance[letter] += i;
            if (distance[letter] !== 0) return false;
        }
    }
    return true;
};

// console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))

function dominantIndex(nums: number[]): number {
    let sorted: number[] = [...nums].sort((a: number, b: number) => b - a);
    let maxElement = sorted[0];
    let i = 1;
    let count = 0;
    while (i < sorted.length) {
        if (maxElement / sorted[1] >= 2) {
            count++;
        } else {
            return -1;
        }
        i++
    }
    // console.log(maxElement, nums)
    return nums.indexOf(maxElement);
};

// console.log(dominantIndex([0,0,0,1]))

///6 3 1 0

// const converPlate = (s: string) => s.toLowerCase().replace(/\s|\d/g, '');

// // Returns an object with the freccuencies
// // Example 1: spst => { s: 2, p: 1, t: 1 }
// const countLetters = (s: string) => {
//   const hash: { [key: string]: number } = {};
//   for (let c of s) {
//     hash[c] ? hash[c]++ : (hash[c] = 1);
//   }
//   return hash;
// };

// // Returns true if the answer is correct
// const compareWords = (
//   plateArray: [string, number][],
//   wordHash: { [key: string]: number }
// ) => {
//   for (let i = 0; i < plateArray.length; i++) {
//     const [key, value] = plateArray[i];
//     if (!(key in wordHash) || value > wordHash[key]) return false;
//   }
//   return true;
// };

// function shortestCompletingWord(licensePlate: string, words: string[]): string {
//   words.sort((a, b) => a.length - b.length);
//   const lowerPlate = converPlate(licensePlate);
//   const plateHash = countLetters(lowerPlate);
//   const plateArray = Object.entries(plateHash); // Easier to iterate

//   for (const word of words) {
//     const wordHash = countLetters(word);
//     console.log(wordHash, "Word Hash")
//     if (compareWords(plateArray, wordHash)) return word;
//   }

//   return '';
// }

// console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]))

function strongPasswordCheckerII(password: string): boolean {
    let myRegex: RegExp = new RegExp("^(?!.*(.)\\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+-]).{8,}$", 'g')
    return myRegex.exec(password) !== null;
};

// console.log(strongPasswordCheckerII("IloveLe3tcode!"))
class MyTreeNode {
    val: number
    left: MyTreeNode | null
    right: MyTreeNode | null
    constructor(val?: number, left?: MyTreeNode | null, right?: MyTreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function inorderTraversal(root: MyTreeNode | null): number[] {
    if (root == null) return [];
    let data: number[] = []
    let current: MyTreeNode | null = root;
    function traverseTree(rootNode: MyTreeNode) {
        if (rootNode.left) traverseTree(rootNode.left);
        data.push(rootNode.val);
        if (rootNode.right) traverseTree(rootNode.right);
    }
    traverseTree(current);
    return data;
};

// let myTree=new MyTreeNode(1);
// myTree.right = new MyTreeNode(2);
// myTree.right.left=new MyTreeNode(3);

// console.log(inorderTraversal(myTree));

function isValidBST(root: MyTreeNode | null): boolean {
    let previousValue: number = -Infinity;
    const inOrderProcess = (node: MyTreeNode | null): boolean => {
        if (!node) return true;
        if (inOrderProcess(node.left)) return false;
        if (node.val <= previousValue) return false;
        previousValue = node.val;
        return inOrderProcess(node.right);
    }
    return inOrderProcess(root);
};
// let myTree=new MyTreeNode(5);
// myTree.left=new MyTreeNode(1);
// myTree.right=new MyTreeNode(4);
// myTree.right.left=new MyTreeNode(3);
// myTree.right.right=new MyTreeNode(6)
// console.log(isValidBST(myTree));

function sortedArrayToBST(nums: number[]): MyTreeNode | null {
    if (nums.length === 0) return null;

    if (nums.length === 1) return new MyTreeNode(nums[0]);
    const key = Math.floor(nums.length / 2);
    return new MyTreeNode(
        nums[key],
        sortedArrayToBST(nums.slice(0, key)),
        sortedArrayToBST(nums.slice(key + 1, nums.length))
    )
};

// console.log(sortedArrayToBST([-10,-3,0,5,9]));

function isSymmetric(root: MyTreeNode | null): boolean {
    if (!root) return false;
    function checker(leftNode: MyTreeNode | null, rightNode: MyTreeNode | null): boolean {
        if (!leftNode && !rightNode) return true;
        if (!rightNode || !leftNode) return false;
        return leftNode.val === rightNode.val && checker(leftNode.left, rightNode.right) &&
            checker(leftNode.right, rightNode.left);
    }
    return checker(root.left, root.right)
};
const root = [1, 2, 2, 3, 4, 4, 3]
let newRoot = new MyTreeNode(1);
newRoot.right = new MyTreeNode(2);
newRoot.left = new MyTreeNode(2);
// newRoot.left.left = new MyTreeNode(3);
newRoot.left.right = new MyTreeNode(3);
// newRoot.right.left = new MyTreeNode(4);
newRoot.right.right = new MyTreeNode(3);
// console.log(isSymmetric(newRoot))

function maxDepth(root: MyTreeNode | null): number {
    if (root == null) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};
const root1 = [3, 9, 20, null, null, 15, 7];
const maxDepthNode = new MyTreeNode(1);
maxDepthNode.right = new MyTreeNode(2);
// maxDepthNode.right.left = new MyTreeNode(15);
// maxDepthNode.right.right = new MyTreeNode(7);

// console.log(maxDepth(maxDepthNode))

function isBalanced(root: MyTreeNode | null): boolean {

    function recursiveDFS(node: MyTreeNode | null): [boolean, number] {
        if (node === null) return [true, 0];
        let left = recursiveDFS(node.left);
        let right = recursiveDFS(node.right);
        let balanced: boolean = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1);
        return [balanced, 1 + Math.max(left[1], right[1])]
    }
    return recursiveDFS(root)[0];
};
[3, 9, 20, null, null, 15, 7]
const mtrr = new MyTreeNode(3);
mtrr.left = new MyTreeNode(9);
mtrr.right = new MyTreeNode(20);
mtrr.right.left = new MyTreeNode(15);
mtrr.right.right = new MyTreeNode(7);
// console.log(isBalanced(mtrr))


function isSameTree(p: MyTreeNode | null, q: MyTreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null || p.val !== q.val) return false;
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};
const tree1 = new MyTreeNode(1);
tree1.left = new MyTreeNode(2);
tree1.right = new MyTreeNode(3);
const tree2 = new MyTreeNode(1);
tree2.left = new MyTreeNode(2);
tree2.right = new MyTreeNode(3);
// console.log(isSameTree(tree1, tree2))


function addOneRow(root: MyTreeNode | null, val: number, depth: number): MyTreeNode | null {
    let coun: number = 1;
    function revccc(node: any, value: number, count: number, depth: number) {
        if (count === depth - 1 && node) {
            node.left = new MyTreeNode(value, node.left, null);
            node.right = new MyTreeNode(value, null, node.right);
            return node;
        }

        if (node.left !== null) {
            node.left = revccc(node.left, value, count + 1, depth);
        }
        if (node.right !== null) {
            node.right = revccc(node.right, value, count + 1, depth);
        }
        return node;
    }

    return revccc(root, val, coun, depth)
};

const valueNode = new MyTreeNode(4);
valueNode.left = new MyTreeNode(2);
valueNode.right = new MyTreeNode(6);
valueNode.left.left = new MyTreeNode(3);
valueNode.left.right = new MyTreeNode(1);
valueNode.right.left = new MyTreeNode(5);
// console.log(addOneRow(valueNode, 1, 2))

function findRelativeRanks(score: number[]): string[] {
    let hashMap: { [key: number]: string } = { 1: "Glod Medal", 2: "Silver Medal", 3: "Bronze Medal" };
    let sortedHashMap: { [key: number]: number } = {};
    let results: string[] = [];
    let sorted: number[] = [...score].sort((a: number, b: number) => b - a);
    for (let i = 0; i < sorted.length; i++) {
        sortedHashMap[sorted[i]] = i + 1;
    }
    //    console.log(sortedHashMap);
    for (let i = 0; i < score.length; i++) {
        if (hashMap[sortedHashMap[score[i]]]) {
            results.push(String(hashMap[sortedHashMap[score[i]]]));
        } else {
            results.push(String(sortedHashMap[score[i]]));
        }
    }

    return results;
};

// console.log(findRelativeRanks( [5,4,3,2,1]))


// 


function minDepth(root: MyTreeNode | null): number {
    if (root === null) return 0;
    if (root.left === null) {
        return minDepth(root.right) + 1
    }
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    return Math.min(left, right) + 1;
};
// [3,9,20,null,null,15,7]
// const minDepthNode = new MyTreeNode(2);
// // minDepthNode.left = new MyTreeNode(9);
// minDepthNode.right = new MyTreeNode(3);
// // minDepthNode.right.left = new MyTreeNode(15);
// minDepthNode.right.right = new MyTreeNode(4);
// minDepthNode.right.right.right = new MyTreeNode(5);
// minDepthNode.right.right.right.right = new MyTreeNode(6);
// console.log(minDepth(minDepthNode))

function hasPathSum(root: MyTreeNode | null, targetSum: number): boolean {
    if (root === null) return false;
    const mainSum = targetSum - root.val;
    return (
        (mainSum === 0 && check(root)) ||
        hasPathSum(root.left, mainSum) || hasPathSum(root.right, mainSum)
    )
};
const minDepthNode = new MyTreeNode(2);
// minDepthNode.left = new MyTreeNode(9);
minDepthNode.right = new MyTreeNode(3);
// minDepthNode.right.left = new MyTreeNode(15);
minDepthNode.right.right = new MyTreeNode(4);
minDepthNode.right.right.right = new MyTreeNode(5);
minDepthNode.right.right.right.right = new MyTreeNode(6);
// console.log(minDepth(minDepthNode))
console.log(hasPathSum(minDepthNode, 22))

function check(node: MyTreeNode | null): boolean {
    return Boolean(node && !node.left && !node.right)
}

// console.log(check(minDepthNode))
function pathSum(root: MyTreeNode | null, targetSum: number): number[][] {
    let matched: number[][] = [];
    function newArrr(node: MyTreeNode | null, total: number, newRow: number[]): void {
        if (node === null) return;
        if (!node.left && !node.right) {
            total = total - node.val;
            if (total === targetSum) {
                matched.push([...newRow, node.val])
            }
            return;
        }

        newArrr(node.left, total, [...newRow, node.val]);
        newArrr(node.right, total, [...newRow, node.val]);
    }
    return matched;
};

// console.log(pathSum(minDepthNode, 22))

function preorderTraversal(root: MyTreeNode | null): number[] {
    if (root === null) return []
    let data: number[] = [];
    function c(node: MyTreeNode | null): void {
        if (node) data.push(node.val);
        if (node && node.left) c(node.left);
        else if (node && node.right) c(node.right);
    }
    c(root);

    return data;
};


function findTarget(root: MyTreeNode | null, k: number): boolean {
    if (root === null) return false;
    const mySet: Set<number> = new Set<number>();
    const queue: any = [root];
    while (queue.length) {
        let current = queue.shift();
        if (current) {
            if (mySet.has(k - current.val)) {
                return true;
            }
            mySet.add(current.val);
            queue.push(current.left, current.right)
        }
    }
    return false;

};
const newNode = new MyTreeNode(5);
newNode.left = new MyTreeNode(3);
newNode.right = new MyTreeNode(6);
newNode.left.left = new MyTreeNode(2);
newNode.left.right = new MyTreeNode(4);
newNode.right.right = new MyTreeNode(7);
// console.log(findTarget(newNode, 9))

function depthFirstSearchPost_Order(root: MyTreeNode | null): number[] {
    if (root === null) return [];
    let data: number[] = [];
    function traverse(root: any): void {
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
        data.push(root.val)
    }
    traverse(root);
    return data;
}

function depthFirstSearchIn_Order(root: MyTreeNode | null): number[] {
    if (root === null) return [];
    let data: number[] = [];
    function traverse(root: any): void {
        if (root.left) traverse(root.left);
        data.push(root.val)
        if (root.right) traverse(root.right);
    }
    traverse(root);
    return data;
}

// console.log(depthFirstSearchIn_Order(newNode))

function binaryTreePaths(root: MyTreeNode | null): string[] {
    let arr: string[] = []
    function recursion(node: MyTreeNode | null, str: string, newArr: string[]): void {
        if (node && node.left) {
            str += `${node.val}->`
        } else if (node && node.right) {
            str += `${node.val}->`
        } else if (node && !node.left && !node.right) {
            str += `${node.val}`
        }
        if (node && node.left) {
            recursion(node.left, str, newArr)
        };
        if (node && node.right) {
            recursion(node.right, str, newArr);
        }
        newArr.push(str);
    }
    recursion(root, "", arr);
    return arr.filter((value: string) => value[value.length - 1] !== ">")
};

// console.log(binaryTreePaths(newNode));

// function findPoisonedDuration(timeSeries: number[], duration: number): number {
//     let results:number=0
//     let sum:number = timeSeries.reduce((acc:number, current:number):number=>{
//         return acc+current
//     },0)
//     console.log(sum);
//     let i=0;
//     while(i<timeSeries.length-1){

//     }
//     return results;
// };

// console.log(findPoisonedDuration([1,2,3,4,5,6,7,8,9],1));

function findMode(root: MyTreeNode | null): number[] {
    if (root === null) return [];
    let myQueue: MyTreeNode[] = [];
    let data: number[] = []
    let hash: { [key: string]: number } = {}
    myQueue.push(root);
    while (myQueue.length) {
        let current = myQueue.shift();
        if (current) {
            if (current.val in hash) {
                hash[current.val]++
            } else {
                hash[current.val] = 1;
            }
        }
        if (current && current.left) myQueue.push(current.left);
        if (current && current.right) myQueue.push(current.right);
    }
    console.log(hash)
    const sorted = Object.entries(hash).sort((a: [string, number], b: [string, number]) => b[1] - a[1]);
    const isOne = sorted.every(([key, value]) => value === 1);
    if (isOne) {
        return sorted.map(([key, value]) => Number(key));
    }
    let max = Math.max(...sorted.map(([key, value]) => value));
    console.log(max)
    let i = 0;
    while (i < sorted.length - 1) {
        if (hash[sorted[i][0]] === max) {
            console.log(sorted[i], "MAXXSS")
            data.push(Number(sorted[i][0]))
        }
        i++;
    }
    return data;
};
const myNode = new MyTreeNode(1);
myNode.left = new MyTreeNode(1);
// myNode.right = new MyTreeNode(2);
// console.log(findMode(myNode), "VALLA")

function numTrees(n: number): number {
    let total: number = 0;
    function factorial(number: number): number {
        if (number === 1) return 1;
        return number * factorial(number - 1)
    }
    let top = factorial(2 * n);
    let bottom = (factorial(n + 1) * factorial(n));
    total = top / bottom;
    return Number((total.toFixed(0)));
};

// console.log(numTrees(19))

// function generateTrees(n: number): Array<MyTreeNode | null> {
//     if(n==0) return [null]
//     return helperFunction(1,n)
// };
// console.log(generateTrees(3))


function getTree(rootNode: number, length: number, hash: { [key: string]: number }): MyTreeNode | null {
    if (rootNode < 1) return null;
    if (rootNode > length) return null;
    if (hash[rootNode] == 1) return null
    const myNode: MyTreeNode = new MyTreeNode(rootNode);
    hash[rootNode] = 1;
    let left = getTree(rootNode - 1, length, hash);
    let right = getTree(rootNode + 1, length, hash);
    myNode.left = left;
    myNode.right = right;
    return myNode;
}

// function getSideTree():MyTreeNode|null{

// }
const myHash: { [key: string]: number } = {}
// console.log(getTree(1,1, myHash));

var helperFunction = function (l:number, n:number):MyTreeNode[] {
    if (l == n) {
        return [new MyTreeNode(l)]
    } else {
        let res = [];
        console.log(l,n)
        for (let i = l; i < n + 1; i++) {
            let left = i != l ? helperFunction(l, i - 1) : [null]
            let right = i != n ? helperFunction(i + 1, n) : [null];
            console.log(right, left)
            for (let leftTree of left) {
                for (let rightTree of right) {
                    let node = new MyTreeNode(i)
                    node.left = leftTree
                    node.right = rightTree
                    res.push(node)
                }
            }
        }
        return res
    }
}

// console.log(helperFunction(1,3))

function sumOfLeftLeaves(root: MyTreeNode | null): number {
     let results:number[]=[];
    function sum(node:MyTreeNode|null, isLeftLeaf:boolean):number{
        if(node===null) return 0;
        else if(node.left===null&&node.right===null&&isLeftLeaf){
            return node.val;
        }else{
            return sum(node.left,true)+sum(node.right,false)
        }
    }
    return sum(root, false)
};
const n = new MyTreeNode(1);
n.left = new MyTreeNode(2);
// n.right= new MyTreeNode(20);
// n.right.left = new MyTreeNode(15);
// n.right.right= new MyTreeNode(7);
// console.log(sumOfLeftLeaves(n));

function subarraySum(nums: number[], k: number): number {
     let answer:number=0;
     let myMap= new Map();
     let prefix:number=0;
     for(let i=0;i<nums.length;i++){
        prefix+=nums[i];
        if(prefix==k){
            answer++;
        }
        if(myMap.has(prefix-k)){
            answer+=myMap.get(prefix-k);
        }
        if(myMap.has(prefix)){
            myMap.set(prefix, myMap.get(prefix)+1)
        }else{
            myMap.set(prefix,1)
        }
     }
     console.log(myMap)
     return answer;

};

function modifiedSubArrayOfSum(nums:number[],k:number):number{
    let sum = nums.reduce((acc:number,curr:number)=>acc+curr,0);
    let remainder=sum;
    let count=0;
    while(remainder>1){
         count+=Math.floor(sum/k);
         remainder=Math.floor(remainder%k);
    }
    console.log(remainder, "remainder");
    return count;
}

// console.log(modifiedSubArrayOfSum([1,2,3,4], 3))


//

function isValidBST2(root:MyTreeNode | null): boolean {
      let preValue=Number.MIN_SAFE_INTEGER;
      const inOrder= (node:MyTreeNode|null):boolean=>{
         if(!node) return true;
         if(!inOrder(node.left)) return false;
         if(node.val<=preValue) return false;
         preValue=node.val;
         return inOrder(node.right)
      }
      return inOrder(root);
};

let myTree=new MyTreeNode(1);
myTree.left=new MyTreeNode(1);
// myTree.right=new MyTreeNode(1);
// myTree.right.left=new MyTreeNode(3);
// myTree.right.right=new MyTreeNode(6)
// console.log(isValidBST2(myTree));




























