// // import { Queue, Stack } from "datastructures-js";
// // import { map, forEach } from "lodash";
// // import { inherits } from 'util'
// // import { EventEmitter } from 'events';
// import { Stack } from 'datastructures-js';
// import e, { response } from 'express';
// import express from 'express';
// import { forEach, isLength, remove, result, sum, takeRightWhile, toPlainObject, words } from 'lodash';
// import fetch from 'node-fetch';

import { create, flowRight, forEach, List, max, random, result, reverse, sortBy, split } from "lodash";
import { interval } from "rxjs";

// // class Person extends EventEmitter{
// //     name:string;
// //     constructor(name:string) {
// //         super();
// //         this.name = name;
// //     }
// // }

// // const person1 = new Person("Pritam");
// // const person2 = new Person("Adi");
// // const person3 = new Person("Adi1");

// // person1.on("speak", (message:string) => {
// //       console.log(person1.name+"Person 1 Speak:"+message)
// // });
// // person2.on("speak", (message:string) => {
// //     console.log(person2.name+"Person 2 Speak:"+message)
// // });
// // person3.on("speak", (message:string) => {
// //     console.log(person3.name+"Person 3 Speak:"+message)
// // });



// // person2.emit("speak", "Hello 2");
// // person1.emit("speak", "Hello 1");
// // person3.emit("speak", "Hello 3");












// // console.log("Start........................");

class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }

 class TreeNode{
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

//  //156
//  function sortedListToBST(head: ListNode | null): TreeNode | null {
//      let list = getList(head);
//      return createTreeNode(list);
// };

// function getList(head:ListNode|null):number[]{
//      if(head===null) return [];
//      let current:ListNode|null = head;
//      let data:number[] = [];
//      while(current){
//         data.push(current.val);
//         current = current.next;
//      }
//      return data;
// }
// [-10,-3,0,5,9]
// let myNode = new ListNode(-10);
// myNode.next=new ListNode(-3);
// myNode.next.next = new ListNode(0);
// myNode.next.next.next = new ListNode(5);
// myNode.next.next.next.next = new ListNode(9);

// // console.log(sortedListToBST(myNode));
// function createTreeNode(arr:number[], start:number=0, end:number=arr.length-1):TreeNode|null{
//     if(start<=end){
//         let middle = Math.floor((start+end)/2);
//         let root = new TreeNode(arr[middle]);
//         root.left = createTreeNode(arr, start, middle-1);
//         root.right = createTreeNode(arr, middle+1, end);
//         return root;
//     }
//     return null;
// }

// class MyHashSet {
//     hash: Set<number>
//     constructor() {
//        this.hash = new Set<number>();;
//     }

//     add(key: number): void {
//        this.hash.add(key)
//     }

//     remove(key: number): void {
//        this.hash.delete(key)
//     }

//     contains(key: number): boolean {
//        return this.hash.has(key);
//     }
// }

// // Input: nums = [5,3,4,4,7,3,6,11,8,5,11]
// // Output: 3
// // Explanation: The following are the steps performed:
// // - Step 1: [5,3,4,4,7,3,6,11,8,5,11] becomes [5,4,4,7,6,11,11]
// // - Step 2: [5,4,4,7,6,11,11] becomes [5,4,7,11,11]
// // - Step 3: [5,4,7,11,11] becomes [5,7,11,11]
// // [5,7,11,11] is a non-decreasing array. Therefore, we return 3.

// function totalSteps(nums: number[], count:number=0): number{
//     // console.log(nums)
//     if(nums[0]>nums[1]){
//         count++;
//         return count;
//     }else if(nums[0]<nums[1]){
//         return 0;
//     }else if(nums[0]===nums[1]){
//         count++;
//         return count;
//     }
//     return totalSteps(nums.splice(1, nums.length), count);
    
// };

// // console.log(totalSteps([5,3,4,4,7,3,6,11,8,5,11]))

// function recoverTree(root: TreeNode | null): void {
//     let prev:any=null;
//     let first:any=null;
//     let second:any=null;
//     function inOrder(root:TreeNode | null):void{
//         if(root==null) return;
//         inOrder(root.left);
//         if(prev!==null&&prev.val>root.val){
//             if(first===null) first=prev;
//             second=root;
//         }
//         prev=root;
//         inOrder(root.right);
//      }
//      inOrder(root);
//      let temp=first.val;
//      first.val=second.val;
//      second.val=temp;
//   };


// let treeNode = new TreeNode(1);
// treeNode.left = new TreeNode(3);
// treeNode.left.right=new TreeNode(2);
// // console.log(recoverTree(treeNode));

// function levelOrderBottom(root: TreeNode | null): number[][] {
//      if(root===null) return [];
//      const output:number[][]=[];
//      let queue:TreeNode[]=[root];
//       while(queue.length) {
//              let size = queue.length;
//              let level:number[]=[];
//              while(size--){
//                  let curr:any = queue.shift();
//                  level.push(curr.val);
//                  if(curr.left) queue.push(curr.left);
//                  if(curr.right) queue.push(curr.right);
//              }
//              output.push([level[1],level[0]]);
//       }
//    return output;
// };

// // console.log()

// function zigzagLevelOrder(root: TreeNode | null): number[][] {
//      if(root===null) return [];
//      let myQueue:TreeNode[] = [];
//      let results:number[][]=[];
//      let direction = true;
//      myQueue.push(root);
//      while(myQueue.length){
//          let level:number[]=[];
//          let size:number=myQueue.length;
//          for(let i=0;i<size;i++){
//             let node:any = myQueue.shift();
//             console.log(node, "NODE");
//             level.push(node.val);
//             if(node.left) myQueue.push(node.left);
//             if(node.right) myQueue.push(node.right);
//          }
//          if(direction){
//              results.push(level);
//              direction=!direction;
//          }else{
//              results.push(level.reverse());
//              direction=!direction;
//          }
//      }
     
//      return results;
// };
// let treeNode1 = new TreeNode(1);
// treeNode1.left=new TreeNode(2);
// treeNode1.right=new TreeNode(5);
// treeNode1.left.left = new TreeNode(3);
// treeNode1.left.right = new TreeNode(4);
// treeNode1.right.right=new TreeNode(6);
// // treeNode1.right.right.right=new TreeNode(7);
// // console.log(zigzagLevelOrder(treeNode1))

// function flatten(root: TreeNode | null): void {
//        if(root==null) return;
//        let myStack: TreeNode[] = [];
//        myStack.push(root);
//        while(!myStack.length){
//             let current:any = myStack.pop();
//             if(current.right){
//                 myStack.push(current.right);
//             }
//             if(current.left){
//                 myStack.push(current.left);
//             }

//             if(myStack.length){
//                 current.right = myStack[myStack.length-1];
//             }
//             current.left = null;
            
//        }
//     //    console.log(root);
    
// };

// // console.log(flatten(treeNode1));

class Node {
         val: number
         left: Node | null
         right: Node | null
         next: Node | null
         constructor(val?: number, left?: Node, right?: Node, next?: Node) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
             this.next = (next===undefined ? null : next)
         }
     }

// function connect(root: Node | null): Node | null {
//         helper([root]);
//         return root;
// };
// function helper(arr:any[]):void{
//    if(arr.length===0){
//        return;
//    }
//    const newArr = [];
//    for(let i=0; i<arr.length; i++){
//        if(!arr[i]){
//           continue;
//        }
//        if(i<arr.length-1){
//           arr[i].next = arr[i+1];
//        }
//        newArr.push(arr[i].left);
//        newArr.push(arr[i].right);
//    }
//    helper(newArr)
// }
const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right.left = new Node(6);
node.right.right = new Node(7);
//     // console.log(connect(node));

// function hardestWorker(n: number, logs: number[][]): number {
//      let myHash:{[key:string]:number}={};
//      let numberOfEmployees:number=n-1;
//      let i=0;
//      let employeeCode:number=0;
//      let taskStartTime:number=0;
//      while(i<logs.length){
//          if(logs[i][0]<=numberOfEmployees){
//               if(logs[i][0] in myHash){
//                   let value = Math.abs(logs[i][1]- taskStartTime);
//                   myHash[logs[i][0]] = Math.max(myHash[logs[i][0]], value);
//                   taskStartTime = logs[i][1];
//               }else{
//                 myHash[logs[i][0]] = Math.abs(logs[i][1]- taskStartTime);
//                 taskStartTime = logs[i][1];
//               }
//          }
//          i++;
//      }
//      console.log(myHash)
//      const maxValue = Math.max(...Object.entries(myHash).map(([key,value])=>value));
//      return Number(Object.entries(myHash).filter(([key,value])=>value>=maxValue)[0][0]);
// };   

// // console.log(hardestWorker(450,[[110,5],[360,7],[48,8],[286,10],[167,12],[110,13],[221,18]]));

// function checkIfPangram(sentence: string): boolean {
//       if(sentence.length ===0) return false;
//       let myHash:{[key:string]:number}={};
//       for(let i=0;i<sentence.length;i++) {
//           if(sentence[i] in myHash){
//               myHash[sentence[i]]++;
//           }
//           myHash[sentence[i]] = 1;
//       }
//       console.log(myHash)
//       return Object.entries(myHash).length===26&& Object.entries(myHash).every(([key,value])=>value==1);
// };

// // console.log(checkIfPangram("leetcode"))

// function frequencySort(s: string): string {
//     if(s.length===0) return "";
//     let myHash:{[key:string]:number}={};

//     for(let i=0; i<s.length; i++) {
//          if(s[i] in myHash){
//             console.log(s[i])
//              myHash[s[i]]++;
//          }else{
//             myHash[s[i]]=1;
//          }
     
//     }

//     // function helper(arr:[string,number][]){
        
//     // }
//     return Object.entries(myHash).sort((a:[string,number], b:[string,number]) => b[1] - a[1]).map(([key, value]) => {
//         let str:string=""
//         for(let i = 0; i <value; i++){
//               str+=key
//         }
//         return str;
// }).join("");
// };

// // console.log(frequencySort("tree"))

function levelOrder(root: TreeNode | null): number[][] {
        if(root==null) return [];
        let queue:TreeNode[]=[];
        let results:number[][]=[];
        queue.push(root);
        while(queue.length){
            let level:number[]=[];
            let size = queue.length - 1;
            let k=0;
            while(k<=size){
                let value:any = queue.shift();
                level.push(value.val);
                if(value.left) queue.push(value.left);
                if(value.right) queue.push(value.right);
                k++;
            }
            results.push(level)
        }
        return results;
};
const val = new TreeNode(1);
val.left = new TreeNode(2);
val.right = new TreeNode(3);
// console.log(levelOrder(val))
// ///               3 
// //              /  \
// //             9    20
//      //            / \
//        //        15   7                    
// // function sumNumbers(root: TreeNode | null, str:string, arr:string[]): number {
// //        if(root == null) return 0
// //        let myQueue :TreeNode[]=[];
// //        function traverse(){
           
// //        }
// // };

// // console.log(sumNumbers(val, "", []));
//1.13
function connect(root: Node | null): Node | null {
    if(root == null) return null;
    function helper(node:Node[]):void{
        if(node.length==0) return;
        const newArr:any = [];
        for(let i=0; i<node.length; i++){
            if(!node[i]){
                continue;
            }
            if(i<node.length-1){
                node[i].next = node[i+1];
            }
            if(node[i].left) newArr.push(node[i].left); 
            if(node[i].right) newArr.push(node[i].right);
        }
        helper(newArr);
    }
    helper([root]);
    return root;
};

// console.log(connect(node))

function topKFrequent(words: string[], k: number): string[] {
   let hashMap:{[key:string]:number}={};
   for(let i = 0; i < words.length; i++) {
       if(words[i] in hashMap){
           hashMap[words[i]]++;
       }else{
          hashMap[words[i]] = 1;
       }
   }
  const sorted = Object.entries(hashMap).sort((a:[string,number], b:[string, number]) =>b[1]===a[1]? a[0].localeCompare(b[0]): b[1]-a[1]);
//   console.log(sorted);
  return sorted.map((entry) => entry[0]).slice(0, k);
};

// console.log(topKFrequent(["i","love","leetcode","i","love","coding"],
// 3));

function sumNumbers(root: TreeNode | null): number {
    function traverse(root:TreeNode | null, num:number):number{
         if(root==null) return 0;
         num = num*10+root.val;
         if(root.left ===null && root.right===null) {
             return num;
         }
        return traverse(root.left, num)+traverse(root.right, num);
         
    }

     return traverse(root, 0);
};

const argumentNode = new TreeNode(1);
argumentNode.left = new TreeNode(2);
argumentNode.right = new TreeNode(3);
argumentNode.left.right = new TreeNode(4);
// argumentNode.right.right = new TreeNode(4);

// console.log(sumNumbers(argumentNode));

function countNodes(root: TreeNode | null, data:number[]): number {
        if(root) data.push(root.val);
        // if(root) console.log(root.val);
        if(root && root.left) countNodes(root.left, data);
        if(root && root.right) countNodes(root.right, data);
        return data.length;
}

// console.log(countNodes(argumentNode, []));

function rightSideView(root: TreeNode | null): number[] {
         if(root===null) return [];
         let queue:[number, TreeNode|undefined][]|undefined=[];
         let hashMap:{[key:string]:number}={};
         queue.push([0, root]);
         while(queue.length){
             let value= queue.shift();
             if(value){
                  hashMap[value[0]]= value[1]!.val;
                  if(value[1] && value[1].left) queue.push([value[0]+1, value[1].left]);
                  if(value[1] && value[1].right) queue.push([value[0]+1, value[1].right]);
             }
         }
         return Object.values(hashMap);

};

// console.log(rightSideView(argumentNode));

function intToRoman(num: number): string {
     function helper(n:number, a:string, b:string, c:string):string{
          if(n===0){
            // console.log("n===0")
            return "";
          }else if(n<=3){
            // console.log("n<=3")
             return new Array(n).fill(a).join("");
          }else if(n===4){
            // console.log("n===4")
              return a+b;
          }else if(n===5){
            // console.log("n===5")
              return b;
          }else if(n===9){
            // console.log("n===9")
             return a+c;
          }else {
            // console.log("else")
            return b+new Array(n-5).fill(a).join("")};
     }
     const thounsands = Math.floor(num/1000);
    //  console.log(thounsands, 'Thounsands')
     const hundreds = Math.floor((num%1000)/100);
    //  console.log(hundreds, 'Hundredths')
     const tens = Math.floor((num%100)/10);
    //  console.log(tens, 'Tensors')
     const singles = Math.floor(num%10);
    //  console.log(singles, 'Singles')
     return helper(thounsands, "M",'?', '?')+helper(hundreds, 'C', 'D', 'M')+helper(tens, 'X', 'L', 'C')+ helper(singles, 'I', "V", 'X');
}

// console.log(intToRoman(58))

// function longestCommonPrefix(strs: string[]): string {

// };

// console.log(longestCommonPrefix())

////SOLID PRINCIPLE////



// async function getStockInformationWithDate(date:string){
      
//       const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
//       const responseData = await response.json();
//       console.log(responseData)
// }

// console.log(getStockInformationWithDate('5-January-2000'))

function longestCommonPrefix(strs: string[]): string {
     let hashMap:{[key:string]:number}={};
     for (let i = 0; i < strs.length; i++){
           let str:string = strs[i];
           let j=0;
           while(j<str.length){
               if(str[j] in hashMap){
                   hashMap[str[j]]++;
               }else{
                   hashMap[str[j]] = 1;
               }
               j++;
           }
     }
    //   console.log();
     return Object.entries(hashMap).filter(([key, value]) =>value>=strs.length).map(([key, value]) =>key).join("");
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))

function search(nums: number[], target: number): number {
        nums.sort((a:number,b:number) => a - b);
        let i=0;
        let left = 0;
        let right = nums.length-1;
        while(left<=right){
            let middle = Math.floor(((left+right)/2));
            if(nums[middle]===target){
                return middle;
            }else if(target>nums[middle]){
                left++;
            }else right--;
        }
        return -1;
};

// console.log(search([-1,0,3,5,9,12], 9))

function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    let directionHash:{[key:string]:number[]}={};
    let visited:{[key:string]:boolean}={};
    function DFS(node:number, direction:{[key:string]:number[]}, hasApple:boolean[], gone:{[key:string]:boolean}):number{
          gone[node] = true;
          let response = 0;
          for(let ele of direction[node]){
            if(gone[ele]) continue;
             response+=DFS(ele, direction, hasApple, gone)
          }
          if((response>0||hasApple[node])&& node!==0) response+=2;
          return response;
    }
    for(let edge of edges){
        if(!directionHash[edge[1]]) directionHash[edge[1]] = [];
        directionHash[edge[1]].push(Number(edge[0])) 
        if(!directionHash[edge[0]]) directionHash[edge[0]] = [];
        directionHash[edge[0]].push(Number(edge[1])); 
    }
    return DFS(0,directionHash, hasApple, visited);
};

// console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false]))

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root&&root.val===val) return root;
    if(root&&root.val<val) searchBST(root.left, val);
    if(root&&root.val<val) searchBST(root.left, val);
    return null;
};



class NewNode {
    val: number
    children: NewNode[]
    constructor(val?: number) {
        this.val = (val===undefined ? 0 : val)
        this.children = []
    }
}


function postorder(root: NewNode | null, data:number[]=[]): number[] {
     if(root===null) return [];
     if(root.children){
        for(let i=0;i<root.children.length;i++){
             postorder(root.children[i], data);
       }
       data.push(root.val);
     }
     return data;
};
// const postOrderNode = 
// console.log()

function preorder(root: NewNode | null, data:number[]=[]): number[] {
    if(root==null) return [];
    if(root){
        data.push(root.val);
    };
    if(root&&root.children){
        for(let i=0; i<root.children.length; i++){
             preorder(root.children[i], data);
        }
    }
    return data;
};

function maxDepth(root: NewNode | null): number {
    if(root===null) return 0;
    if(!root.children.length) return 1;
    const childrenDepth:number[]=[];
    if(root&&root.children){
        for(let chi of root.children){
             childrenDepth.push(maxDepth(chi)+1)
        }
    }
    return Math.max(...childrenDepth)

};

function findErrorNums(nums: number[]): number[] {
    let duplicate:number=-1;
    let missed:number=-1;
    nums.forEach((ele:number,index:number)=>{
        const i = Math.abs(nums[index])-1;
        nums[i]<0?(duplicate=Math.abs(nums[index])): (nums[i]*=-1);
    })

    nums.every((ele:number,i:number)=>{
        if(nums[i]>0){
             missed=i+1;
             return false;
        }
        return true;
    })

    return [duplicate, missed];
};

// console.log(findErrorNums([2,2]))

function maxLength(arr: string[]): number {
      let charSet = new Set<string>();

      function overlap(newSet: Set<string>, oldSet: string){
         let previous = new Set<string>();
         for(let i=0; i<oldSet.length; i++){
             if(oldSet[i] in charSet || oldSet[i] in previous){
                 return true;
             }
             previous.add(oldSet[i]);
             return false;
         }
      }

      function backtrack(i:any):number{
           if(i===arr.length){
              return charSet.size;
           }
           let res = 0;
           if(!overlap(charSet, arr[i])){
              for(let c of arr[i]){
                  charSet.add(c);
              }
              res = backtrack(i+1);
              for(let c of arr[i]){
                 charSet.delete(c);
              }
           }
        return Math.max(res, backtrack(i+1));
      }
      return backtrack(0);
};

// console.log(maxLength(["un","iq","ue"]))

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
      let maxLevel:number=0;
      let node:TreeNode|null = null;

      function dfs(root:TreeNode|null, level:number):number{
            if(!root) return level-1;
            maxLevel = Math.max(maxLevel, level);
            const leftCheck = dfs(root.left, level+1)
            const rightCheck = dfs(root.right, level+1);
            if(leftCheck===maxLevel&&rightCheck===maxLevel){
                node = root;
            }
            return Math.max(leftCheck, rightCheck);
      }
      dfs(root,0);
      return node;
}; 

const subStreeNode=new TreeNode(3);
subStreeNode.left = new TreeNode(5);
subStreeNode.left.left=new TreeNode(6);
subStreeNode.left.right = new TreeNode(2);
subStreeNode.left.right.left=new TreeNode(7);
subStreeNode.left.right.right = new TreeNode(4);
subStreeNode.right = new TreeNode(1);
subStreeNode.right.left = new TreeNode(0);
subStreeNode.right.right = new TreeNode(8);

    // console.log(subtreeWithAllDeepest(subStreeNode));

function minDiffInBST(root: TreeNode | null): number {
    if(root===null) return 0;;
    let queue:TreeNode[] = [];
    let valueArr:number[]=[];
    let minDifference = Number.MAX_VALUE;
    queue.push(root);
    while(queue.length){
         let current = queue.shift();
         if(current){
             valueArr.push(current.val);
         }
         if(current&&current.left) queue.push(current.left);
         if(current&&current.right) queue.push(current.right);
    }
    valueArr.sort((a:number,b:number)=>a-b);
    // console.log(valueArr);
    for(let i=0;i<valueArr.length;i++){
        let difference = valueArr[i+1] - valueArr[i];
        if(difference<minDifference){
            minDifference=difference;
        }
    }
    return minDifference;
};

const minDIffNode = new TreeNode(4);
minDIffNode.left = new TreeNode(2);
minDIffNode.left.left = new TreeNode(1);
minDIffNode.left.right = new TreeNode(3);
minDIffNode.right = new TreeNode(6);
// console.log(minDiffInBST(minDIffNode));

//WAP to remove all the unique elements from an arary

function removeUniqueArray(arr:number[]):number[]{
    let myHash:{[key:string]:number}={};
    for(let i=0; i<arr.length; i++){
      if(arr[i] in myHash){
         myHash[arr[i]]++;
      }else{
         myHash[arr[i]]=1;
      }
    }
    return Object.entries(myHash).filter(([key,value])=>value>=2).map(([key,value])=>Number(key));
}

// console.log(removeUniqueArray([1,2,3,3,4,4,5,5, 6,7,8,8,8,8,9,9]));

///Find the second highest number from an array

function highestNumber(arr:number[]):number{
    let hashMap:{[key:string]:number}={};
    for(let i=0; i<arr.length; i++){
         if(arr[i] in hashMap){
             hashMap[arr[i]]++;
         }else{
             hashMap[arr[i]]=1;
         }
    }
    return Number(Object.keys(hashMap).sort((a:string,b:string)=>Number(b)-Number(a))[1]);
}

// console.log(highestNumber([1,2,4,5,5,3,6,7,8,8,89,10]));

function elimateDuplicateNumber(arr:number[]):number[]{
       let myHashSet:{[key:string]:number}={};
       for(let i=0; i<arr.length; i++){
        if(arr[i] in myHashSet){
            myHashSet[arr[i]]++;
        }else{
            myHashSet[arr[i]]=1;
        }
   }
   return Object.keys(myHashSet).map((value:string)=>Number(value));
}

// console.log(elimateDuplicateNumber([1,2,4,5,5,3,6,7,8,8,89,10]))

function displayEvenNumber(arr:number[]):number[]{
     let evenNumber:number[]=[];
     for(let i=0;i<arr.length;i++){
         if(arr[i]%2==0){
             evenNumber.push(arr[i]);
         }
     }
     return evenNumber;
}

// console.log(displayEvenNumber([1,2,4,5,5,3,6,7,8,8,89,10]))

function generateSubArray(arr:number[], target:number, geneRateArry:number[][]=[]):number[][]{
      if(arr.length===0) return geneRateArry;
      let count=0;
      let level = [];
      while(count<target){
            if(arr[count]){
               level.push(arr[count]);
            }
            count++;
      }
      geneRateArry.push(level);
      return generateSubArray(arr.splice(target), target, geneRateArry);
}
// console.log(generateSubArray([1,2,3,4,5,6,7],3));

function reverseAString(str:string):string{
    let strSplit:string[]=[];
    let space=0
    let i=0
      for(;i<str.length; i++){
         if(str[i]===" "){
             strSplit.push(str.substring(space, i));
             space=i;
         }
      }
      strSplit.push(str.substring(space, str.length));
      let reverseLevel=[];
      for(let k=strSplit.length-1; k>=0; k--) {
           reverseLevel.push(strSplit[k]);
      }
    return reverseLevel.join(" ");
}

// console.log(reverseAString("my name is demo"))

function reverseAStringWithBuiltInFunction(str:string):string{
    return str.split(" ").reverse().join(" ");
}

// console.log(reverseAStringWithBuiltInFunction("my name is demo"))

// console.log("my name is demo".substring(0,2))

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
   return word1.join("")===word2.join("")
};

// console.log(arrayStringsAreEqual(["a", "cb"],
// ["ab", "c"]))


function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] { 
    if(root==null || target==null) return [];
     let arr:number[]=[]
    function printSubTree(node:TreeNode|null, K:number):void{
        if(node==null||K<0) return;
        if(K==0){
           arr.push(node.val);
           return;
        }
        if(node&&node.left) printSubTree(node.left, K-1);
        if(node&&node.right) printSubTree(node.right,K-1);
    }

    function printAncestorTree(node:TreeNode|null, target:TreeNode, targetNumber:number):number{
         if(node===null) return -1;
         if(node ===target){
             printSubTree(node, targetNumber);
             return 0;
         }
         let dl = printAncestorTree(node.left, target, targetNumber);
         if(dl!==-1){
             if(dl+1===targetNumber){
                 arr.push(node.val);
             }else{
                 printSubTree(node.right,targetNumber-dl-2)
             }
             return 1+dl;
         }
         let dr = printAncestorTree(node.right, target, targetNumber);
         if(dr!==-1){
             if(dr+1===targetNumber){
                 arr.push(node.val);
             }else{
                 printSubTree(node.left,targetNumber-dr-2);
             }
             return 1+dr;
         }
       return -1;
    }
      
    printAncestorTree(root, target, k);
    return arr;
};

const distanceKNode = new TreeNode(3);
distanceKNode.left = new TreeNode(5);
distanceKNode.left.left = new TreeNode(6);
distanceKNode.left.right = new TreeNode(2);
distanceKNode.left.right.left = new TreeNode(7);
distanceKNode.left.right.right = new TreeNode(4);
distanceKNode.right = new TreeNode(1);
distanceKNode.right.left = new TreeNode(0);
distanceKNode.right.right = new TreeNode(8);
// console.log(distanceK(distanceKNode, distanceKNode.left, 2));


function pruneTree(root: TreeNode | null): TreeNode | null {
     if(root==null) return null;
     if(root&&root.left==null&&root.right==null) return null;
     function prune(node:TreeNode|null):boolean{
           if(node===null) return false;
           let leftContainer = prune(node.left);
        //    console.log(leftContainer, node.val ,"LEFT");
           let rightContainer = prune(node.right);
        //    console.log(rightContainer, node.val ,"RIGHT");
           if(!leftContainer){
                node.left = null;
           }
           if(!rightContainer){
               node.right = null;
           }
         return node.val===1 && (leftContainer || rightContainer);  
     }
     prune(root);
     return root;
};

const pruneNode = new TreeNode(0);
// pruneNode.left.left = new TreeNode(0);
// pruneNode.left.right = new TreeNode(1);
// pruneNode.left.right.left = new TreeNode(0);
// pruneNode.left.right.right = new TreeNode(1);
pruneNode.right = new TreeNode(0);
pruneNode.right.left = new TreeNode(0);
pruneNode.right.right = new TreeNode(1);
// console.log(pruneTree(pruneNode))

function lengthOfLongestSubstring(s: string): number {
    let startIndex=0;
    let endIndex = 0;
    let max = 0;
    let mySet:Set<string> = new Set<string>();
    while(endIndex<s.length){
        if(mySet.has(s[endIndex])){
            mySet.delete(s[startIndex]);
            startIndex++;
        }else{
            mySet.add(s[endIndex]);
            endIndex++;
            max = Math.max(max, mySet.size);
        }
    }
    return max;
};

// console.log(lengthOfLongestSubstring(" "))

function frequencySort(s: string): string {
    let str="";
    let myHash:{[key:string]:number}={};
    for(let i=0; i<s.length; i++){
         if(s[i] in myHash){
             myHash[s[i]]++;
         }else{
            myHash[s[i]]=1;
         }
    }
    Object.entries(myHash).sort((a:[string,number],b:[string,number])=>b[1]-a[1]).forEach(([key,value])=>{
         if(value>1){
             let j=0;
             while(j<value){
                 str+=key;
                 j++;
             }
         }else{
             str+=key;
         }
    });
    return str;
};

// console.log(frequencySort("tree"))

function equalFrequency(word: string): boolean {
      let myHash:{[key:string]:number}={};
      for(let i=0;i<word.length;i++){
         if(word[i] in myHash){
             myHash[word[i]]++;
         }else{
             myHash[word[i]]=1;
         }
      }
     const arr = Object.values(myHash);
     for(let i = 0; i < arr.length; i++){
         const newArray = Array.from(arr);
         if(newArray[i]===1) newArray.splice(i,1);
         else newArray[i]--;
         if(new Set(newArray).size==1) return true;
     }
      return false;
};

// console.log(equalFrequency("aazz"))
function checkSubarraySum(nums: number[], k: number): boolean {
     
    let hashMap:{[key:number]:number}={0:-1};
    let total = 0;
    let i=0;
    while(i<nums.length){
        total+=nums[i];
        let remainder = total%k;
        if(!(remainder in hashMap)){
            hashMap[remainder] = i;
        }else if(i-hashMap[remainder]>1){
             return true;
        }
        i++;
    }
    return false;
};

// console.log(checkSubarraySum([23,2,4,6,7],6))

function longestContinuousSubstring(s: string): number {
    let results:number[]=[];
    let longestEver:number=1;
    let longestThis:number=1;
    for(let i=0;i<s.length;i++){
         results.push(s.charCodeAt(i));
         if(results[i]-results[i-1]==1){
             longestThis+=1;
         }else{
            longestEver = Math.max(longestEver, longestThis);
            longestThis=1;
         }

    }
    return Math.max(longestEver, longestThis);
};

// console.log(longestContinuousSubstring("abacaba"));

///Heap///

class MaxHeap{
    values:number[];
    constructor(){
       this.values = [];
    }

    public insert(value:number):void{
         this.values.push(value);
         this.sortHeap();
    }

    private sortHeap(){
        let elementIndex:number=this.values.length-1;
        const element = this.values[elementIndex];
        while(elementIndex>0){
            let parentIndex = Math.floor((elementIndex-1)/2);
            let parent = this.values[parentIndex];
            if(element<=parent) break;
            this.values[parentIndex] = element;
            this.values[elementIndex] = parent;
            elementIndex = parentIndex;
        }
    }
}

let myHeap = new MaxHeap();
myHeap.insert(34)
myHeap.insert(32)
myHeap.insert(3)
myHeap.insert(22)
myHeap.insert(344)
myHeap.insert(36)
// console.log(myHeap);


function prefixesDivBy5(nums: number[]): boolean[] {
     let results:boolean[]= new Array<boolean>(nums.length).fill(false);
     let i=0;
     let str=0
     while(i<nums.length){
          str = str * 2+nums[i];
          if(str%5===0){
             results[i]=true;
          }
          str%=5;
          i++;
     }
     return results
};

// console.log(prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]))

function detectCapitalUse(word: string): boolean {
     function checker(cha1:string, cha2:string, count:number):boolean{
           if((cha1===cha1.toUpperCase())&&(cha2===cha2.toLowerCase())&&count==0)  return true;
           else if(cha1===cha1.toUpperCase()&&cha2===cha2.toLowerCase()&&count>0) return false;
           else if((cha1===cha1.toLowerCase())&&(cha2===cha2.toLowerCase())) return true;
           else if((cha1===cha1.toUpperCase())&&(cha2===cha2.toUpperCase())) return true;
           return false;
     }
     let i=0;
     let count:number=0;
     while(i<word.length-1){
         if(!checker(word[i], word[i+1], count)) return false;
         count++;
         i++;
     }
    return true;
};

// console.log(detectCapitalUse("FFf"));


function groupAnagrams(strs: string[]): string[][] {
     let hashMap:{[key:string]:string[]}={};
     for(let i=0;i<strs.length;i++){
          let characters:number[]=new Array<number>(26).fill(0);
          for(let j=0;j<strs[i].length;j++){
               characters[strs[i][j].charCodeAt(0)-97]++;
          }
        //   console.log(...(hashMap[characters.toString()] ?? []), strs[i])
        //   hashMap[characters.toString()]=[...(hashMap[characters.toString()] ?? []), strs[i]]
     }
     return Object.keys(hashMap).map(((key)=>hashMap[key]))
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// 
// let array:any = [5,6,'apple', 5, 6, 'apple', "3", "2", "5", { "name": "Kanchan" }, { "name": "Kanchan" }]

// let hashMap:{[key:string|number]:number} = {};
// let results:any[]=[]
// for(let i=0;i<array.length;i++){
//       if(!results.includes(array[i])){
//           results.push(array[i])
//       }
// }

// console.log(results)


// let myObj = {
//     name:"Pritam",
//     lastname: 'biswas'
// }

// function printF(this: any):string{
//     return this.name + ": " + this.lastname
// }
// const callMe = printF.bind(myObj);
// console.log(callMe());

function getMeTheRecipie(value:number):Promise<number>{
      return new Promise((resolve, reject) =>{
            console.log("Taking the order");
            if(value<4){
                console.log("Sending to the kitchen")
                resolve(value)
            }else{
                console.log("Could nt send to the kitchen")
                reject(-1)
            }
      })
}

function startedCooking(recipieNumber:number):Promise<number>{
      return new Promise((resolve, reject)=>{
            console.log("Started cooking with recipie number " + recipieNumber);
            if(recipieNumber<4){
                console.log("Finished cooking with recipie number " + recipieNumber)
                resolve(recipieNumber);
            }else{
                console.log("Couldnt find recipie number " + recipieNumber);
                reject(-1);
            }
      })
}

function serveing(tableNumber:number):Promise<void>{
       return new Promise((resolve, reject)=>{
             console.log("Serving to the client...Table number "+tableNumber);
             resolve();
       })
}

// getMeTheRecipie(4).then((value)=>startedCooking(value)).then((value)=>serveing(value)).catch(error=>{
//      console.log(error);
// })

async function foodService(recipie:number):Promise<void>{
      try {
      const recipieNumber = await getMeTheRecipie(recipie);
      const cookedFood = await startedCooking(recipieNumber);
      await serveing(cookedFood);
      } catch (error) {
        // console.log(error)
      }
}
// console.log("Start");
// foodService(3);
// console.log("stop");

// const formatter = Intl.NumberFormat('en', {
//     notation: 'compact',
//     style: 'number',
//     currency: 'INR'
// });

// console.log(formatter.format(343223232_32323232323))

function lengthOfLastWord(s: string): number {
    return s.replace(/\s+/g, ' ').trim().split(" ")[s.replace(/\s+/g, ' ').trim().split(" ").length-1].length;
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "))
function secondsToRemoveOccurrences(s: string): number {
      
    let respons:number=0;
    let count:number=1;
    let stringSplit:string[]=s.split("");
    while(count!==0){
         count =0;
         for(let i =0;i<stringSplit.length;i++){
            if(stringSplit[i]==="0"&&stringSplit[i+1]==="1"){
                stringSplit[i]="1";
                stringSplit[i+1]="0";
                i++;
                count++;
            }
         }
         respons++;
    }
    return respons-1;
};

// console.log(secondsToRemoveOccurrences("0110101"));



function reverseOddLevels(root: TreeNode | null): TreeNode | null {
     if(!root) return null;
     function reverse(oneNode:TreeNode|null, twoNode:TreeNode|null, level:number):void{
         if(oneNode===null || twoNode===null) return;
         if(level&&1){
            let temp = 0;
            temp = oneNode.val;
            oneNode.val=twoNode.val;
            twoNode.val=temp;
         }
         reverse(oneNode.left, twoNode.right, level+1);
         reverse(oneNode.right, twoNode.left, level+1);
     }
     reverse(root.left, root.right,1)
   return root;  
};

const reverseOddLevelsNode = new TreeNode(2);
reverseOddLevelsNode.left = new TreeNode(3);
reverseOddLevelsNode.right = new TreeNode(5);
reverseOddLevelsNode.left.left = new TreeNode(8);
reverseOddLevelsNode.left.right = new TreeNode(13);
reverseOddLevelsNode.right.left = new TreeNode(21);
reverseOddLevelsNode.right.right = new TreeNode(34);

// console.log(reverseOddLevels(reverseOddLevelsNode));

function reverseVowels(s: string): string {
    let vowels:string[]=["a", "e", "i", "o", "u"];
    let stringSplit:string[]=s.split("");
     let left:number =0;
     let right:number = s.length-1;
     while(left<right){
         if(vowels.includes(stringSplit[left].toLowerCase())){
             if(vowels.includes(stringSplit[right].toLowerCase())){
                 let temp:string = stringSplit[left];
                 stringSplit[left] = stringSplit[right];
                 stringSplit[right] =temp;
                 right--;
                 left++;
             }else{
                right--;
             }
         }else{
             left++;
         }
     }
     return stringSplit.join("")    
};

// console.log(reverseVowels("leetcode"))

// function getSmallestString(n: number, k: number, genratedString:string=""): string {
//       if(k===0&&genratedString.length===n) return genratedString;
//       for(let i=0;i<26;i++){
           
//       }
// };

// console.log(getSmallestString(3, 27));


 
function repeatLimitedString(s: string, repeatLimit: number): string {
    let trackString:{[key:string]:number}={"z":0,"y":0,"x":0,"w":0,"v":0,"u":0, "t":0, "s":0, 'r':0,};
    let splitString:string[]=s.split("");
    let newString:string="";
    console.log(splitString)
    for(let i=0;i<splitString.length;i++){
          if(Math.abs(splitString[i].charCodeAt(0)-122)>=0){
              
          }
    }

    return ""
};


// console.log(repeatLimitedString("cczazcc", 3))


function findTargetSumWays(nums: number[], target: number): number {
    const memo:{[key:string]:number}={};
   function helper (nums:number[],sum:number, i:number){
         let token:string = i+"->"+sum;
         if(token in memo) return memo[token];
         if(i===0){
             if(sum===0 && nums[0]===0) return 2;
             return nums[0]===sum || nums[0]=== -sum ? 1:0;
         }
         memo[token] = helper(nums, sum+nums[i],i-1)+helper(nums,sum-nums[i], i-1);
         return memo[token];
    }
    return helper(nums, target, nums.length-1);
};

// console.log(findTargetSumWays([1,1,1,1,1],3))

function missingNumber(nums: number[]): number {
    for(let i=0;i<nums.length;i++){
        if(!nums.includes(i)){
            return i
        }
    }
    return 0;
};

// console.log(missingNumber([3,0,1]))
function evaluateTree(root: TreeNode|null): boolean {
    if(root&&root.val==2) return (evaluateTree(root.left)||evaluateTree(root.right));
    else if(root&&root.val==3) return (evaluateTree(root.left)&& evaluateTree(root.right));
    else if(root&&root.val==1) return true;
    else return false;
};
// const evaluateTreeNode = new TreeNode(2);
// evaluateTreeNode.left = new TreeNode(1);
// evaluateTreeNode.right = new TreeNode(3);
// evaluateTreeNode.right.left = new TreeNode(0);
// evaluateTreeNode.right.right = new TreeNode(1);
// console.log(evaluateTree(evaluateTreeNode))


// function combinationSum(candidates: number[], target: number, ): number[][]|null {
//     if(target===0) return [];
//     if(target<0) return null;
//     for(let num of candidates){
//          const remainder = target-num;
//          const results = combinationSum(candidates, remainder);
//     }
//     return []
// };

// console.log(combinationSum([2,3,6,7], 7))

// function combinationSum2(candidates: number[], target: number): number[][] {
//     let results:number[][]=[];
//     candidates.sort((a:number,b:number)=>a-b);
//     function recursion(index:number, arr:number[], target:number, newArr:number[], res:number[][]):void{
//          if(target===0) {
//              let temp=[];
//              for(let item of newArr){
//                  temp.push(item);
//              }
//              res.push(temp);
//              return;
//          }
//          for(let i=index;i<arr.length;i++){
//               if(i>index&&arr[i]===arr[i-1]) continue;
//               if(arr[index]>target) break;
//               newArr.push(arr[i]);
//               recursion(i+1, arr, target-arr[i], newArr, res);
//               newArr.pop();
//          }
//     }
//     recursion(0, candidates, target,[], results);
//     return results;
// }

// console.log(combinationSum2([10,1,2,7,6,1,5],8))


function maximum69Number (num: number): number {
    let arrayNumber:string[]=[...num.toString().split("")];
    arrayNumber[arrayNumber.indexOf("6")]="9"
    return Number(arrayNumber.join(""))
};

// console.log(maximum69Number(9669))

function makeGood(s: string): string {
    const stack: string[] = [];
  
    let i = 0;
  
    const isBad = (c1: string, c2: string) => {
      return Math.abs(c1.charCodeAt(0) - c2.charCodeAt(0)) === 32;
    };
  
    while (i < s.length) {
      stack.push(s.charAt(i));
  
      while (
        stack.length > 1 &&
        isBad(stack[stack.length - 2], stack[stack.length - 1])
      ) {
        stack.pop();
        stack.pop();
      }
  
      i++;
    }
  
    return stack.join('');
  }

// console.log(makeGood("leEeetcode"))


function isAdditiveNumber(num: string): boolean {
    for(let i=0; i<num.length-1; i++) {
        let previous1=num.slice(0,i);
        console.log(previous1, "PREVIOUS 1")
        for(let j=i+1; j<num.length; j++) {
            let previous2=num.slice(i,j);
            if(checker(num, previous1, previous2, j)){
                return true;
            }
        }
    }
    return false;
};

function checker(mainString:string, previous1:string, previous2:string, nextIndex:number):boolean{
    console.log(mainString, previous1, previous2, nextIndex);
     if(nextIndex===mainString.length) return true;
     if((previous1.length!==1&&previous1.startsWith('0'))|| (previous2.length!==1&&previous2.startsWith("0"))){
        return false;
     }
     const next = +previous1+ +previous2 + '';
     if(nextIndex+next.length>mainString.length) return false;
     if(mainString.slice(nextIndex, nextIndex+next.length)===next){
        return checker(mainString, previous2, next, nextIndex+next.length);
     }else return false;
}


// console.log(isAdditiveNumber("112358"))


function nextLargerNodes(head: ListNode | null): number[] {
     if(head===null) return [];
     const results:number[] = [];
     const stack:number[][]=[];
     stack.push([head?.val, 0]);
     let i =0;
     let current = head?.next;
     while(current){
          const value = current.val;
          while(stack.length>0&&stack[stack.length-1][0]<value){
            const val = stack.pop();
            if(val){
                results[val[1]] = value;
            }
            
          }
          stack.push([value, i]);
          if(current.next ===null) results[i]=0;
          i++;
          current=current.next;
     }
     while(stack.length){
          const myValue = stack.pop();
          if(myValue){
              results[myValue[1]]=0;
          }
     }
     return results;
};


const linkListNode = new ListNode(2);
linkListNode.next = new ListNode(1);
linkListNode.next.next = new ListNode(5);
console.log(nextLargerNodes(linkListNode));

function removeDuplicates(s: string, isMatched:boolean=true): string {
        let myStack:string[]=[];
        for(let word of s){
              if(myStack[myStack.length-1]===word) myStack.pop();
              else myStack.push(word);
        }
        return myStack.join("")
};

console.log(removeDuplicates("azxxzy"));



class LinkedListNode {
      val:number;
      next: LinkedListNode|null;
      constructor(val:number){
          this.val = val;
          this.next = null;
      }
}

const myLinkedList = new LinkedListNode(3);
myLinkedList.next = new LinkedListNode(4);
myLinkedList.next.next = new LinkedListNode(5);


// function iteration (head:LinkedListNode|null, target:number) :boolean{
//        if(head===null) return false;
//        if(head.val===target) return true;
//        return iteration(head.next, target);
// }

// console.log(iteration(myLinkedList, 7)

function wiggleSort(nums: number[]): void {
    
};


// console.log(wiggleSort([1,5,1,1,6,4]))


function plusOne(digits: number[]): number[] {
    let index:number = digits.length - 1;
    console.log(index, "Index")
    if(index==0 && digits[index]===9) return [1,0];
    while(digits[index]==9){
        digits[index]=0;
        if(index===0) return [1, ...digits];
        index--;
    }
    digits[index]++;
    return digits;
};


// // console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]))

function subsets(nums: number[], twoDArray:number[][]=[]): number[][] {
     let answer:number[][]=[];
     function recursion(temp:number[], numsss:number[]):void{
         console.log(temp, numsss, "TEMP and numss")
          answer.push(temp);
          for(let [index, num] of numsss.entries()){
              recursion(temp.concat(num), numsss.slice(index+1))
          }
     }
     recursion([],nums);
     return answer;
};
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([1,2,3]));

// function removeDuplicates(nums: number[]): number {
//     let mySet:Set<number>=new Set<number>(nums);
//     return 0;
// };

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
     for(let i=0;i<n;i++){
          nums1[i+m] = nums2[i];
     }
     nums1.sort((a:number,b:number)=>a-b);
     console.log(nums1)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


function reverseWords(s: string): string {
     
    let str:string[]= s.replace(/\s{2,}/g, ' ').trim().split(" "); 
    return str.reverse().join(" ");
};

// console.log(reverseWords("  hello world  "))

function countPrimes(n: number): number {
     if(n<2) return 0;
     let results:number[]=new Array<number>(n).fill(1);
     results[0]=results[1]=0;
     for(let i=2;i<n;i++){
          if(results[i]===1){
                for(let j=0;i*(i+j)<n;j++){
                    results[i*(i+j)]=0;
                }
          }
     }

     let sum = results.reduce((a:number,b:number)=>a+b,0);
     return sum;
};

console.log(countPrimes(10));

// function summaryRanges(nums: number[]): string[] {
//      let editableString: string = "";
//      let results: string[] = [];
//      let i=0;
//      while(i<nums.length-1) {
//           editableString+=nums[i];
//           if(nums[i]+1===nums[i+1]){
                
//           }
//           i++
//      }

//      return []

// };

// console.log(summaryRanges([0,1,2,4,5,7]))

// function productQueries(n: number, queries: number[][]): number[] {

// };

function countDistinctIntegers(nums: number[]): number {
    let mySet:Set<number>=new Set<number>();
    let i=0;
    const length = nums.length
    while(i<length){
          let stringNum = String(nums[i]).split("").reverse().join("");
          console.log(stringNum, "STRINGNUM")
          nums.push(stringNum[0]==="0" ? Number(stringNum.slice(1)) : Number(stringNum))
          i++
    }
    for(let i=0;i<nums.length;i++){
        mySet.add(nums[i])
    }
    return mySet.size;
     
};


// console.log(countDistinctIntegers([89904,846787,965070,396570,847607,625317,851503,143414,954838,837423,988190,916423,771555,680073,575614,967207,965688]))
function conditinChecker(index:number, value:number, length:number):boolean{
     if(index>=1&&index<length&&value>0) return true;
     return false;
}
var minimizeArrayValue = function(nums:number[]) {
     const len = nums.length
     const sum = nums.reduce((cur:number, acc:number) => cur + acc, 0)
     const best = Math.ceil(sum / len)
     
     
     function isOK(upper:number) {
         let need = 0
         for (const val of nums) {
             const extra = val - upper
             
             // if no extra
             if (extra < 0) {
                 need -= extra
             } else {
                 // they need more
                 if (need >= extra) {
                     need -= extra
                 } else {
                     return false
                 }
             }
             console.log(need, extra, "Extra need")
         }
         
         return true
     }
     
     
     
     let low = best, high = Math.max(...nums)
     while (low < high) {
         const mid = Math.floor((low + high) / 2)
         console.log(mid, "MIDDLDE")
         if (isOK(mid))  high = mid
         else low = 1 + mid
     }
     
     
     return high
 };
// console.log(minimizeArrayValue([3,7,1,6]))
 function productQueries(n:number, queries:number[][]):number[]{
       let mod = 1000000007;
       let binaryNumber = n.toString(2);
       console.log(binaryNumber, "BINARY NUMBER")
       let power:number[]=[];
       for(let i=binaryNumber.length-1; i>=0; i--){
             if(binaryNumber[i]==="1"){
               power.push(Math.pow(2, (binaryNumber.length-1-i)))
             }
       }
       console.log(power, "POWER")
      const results:number[]=[];
      for(let innerAray of queries.entries()){
           let value:number=1;
           let startPoint:number=innerAray[1][0];
           let endPoint:number=innerAray[1][1];
           console.log(startPoint, endPoint);
           while(startPoint<=endPoint){
               value = (value*power[startPoint])%mod;
               startPoint++;
           }
            results.push(value);
      } 
      return results;
 }

//  console.log(productQueries(15, [[0,1],[2,2],[0,3]]))

function maxRotateFunction(nums: number[]): number {
     let sumOfNumber:number = nums.reduce((sum:number, num:number) => sum + num,0);
     let mainSum:number = nums.reduce((acc:number,num:number,i:number)=>acc+i*num,0);
     let maxSum=mainSum;
     console.log(sumOfNumber, mainSum, "MAIN SUMSMSMSMSMSM");
     for(let i=0; i<nums.length; i++){
           console.log(sumOfNumber-nums.length* nums[nums.length-1-i], "NCNCNC")
           mainSum+=sumOfNumber-nums.length* nums[nums.length-1-i];
           console.log(mainSum, maxSum, "Main SUM After , Max sum before")
           maxSum=Math.max(maxSum, mainSum);
           console.log(maxSum, "After Max SUm")
     }
     return maxSum;
};

// console.log(maxRotateFunction([4,3,2,6]))

function countNodes2(root: TreeNode | null, data:number[]): number {
         if(root) data.push(root.val) ;
         if(root&&root.left) countNodes2(root.left, data);
         if(root&&root.right) countNodes2(root.right, data)
         return data.length;
};

function removeDuplicates2(nums: number[]): number {
    let index=0;
    let current=nums[0]
     for(let i=1; i<nums.length; i++){
          if(nums[i]!==current){
              nums[index]=nums[i];
              current=nums[i];
              index++;
          }
     }
     return index;
};

function majorityElement(nums: number[]): number {
    let hashMap:{[key:string]:number}={}
    for(let i=0;i<nums.length;i++){
         if(nums[i] in hashMap) hashMap[nums[i]]++;
         else hashMap[nums[i]]=1;
    }
    // console.log()
    return Number(Object.entries(hashMap).sort((a:any,b:any)=>b[1]-a[1])[0][0]);
};

// console.log(majorityElement( [2,2,1,1,1,2,2]))

function majorityElement2(nums: number[]): number[] {
    let hashMap:{[key:string]:number}={};
     for(let i=0;i<nums.length;i++){
        if(nums[i] in hashMap) hashMap[nums[i]]++;
        else hashMap[nums[i]]=1;
     }
      let results:number[]=[]
      let props = Object.getOwnPropertyNames(hashMap);
      let propKeys = Object.keys(hashMap);
      let i=0;
      while(i<props.length){
         if(hashMap[props[i]]>nums.length/3) results.push(Number(propKeys[i]))
         i++;
      }
      return results;
};

// console.log(majorityElement2([1,1,2,2,1,1,1,1,2,2,1,1]))
function coinChange(coins: number[], amount: number): number {
    let noOfCount=Infinity;
    const dp=new Array<number>(amount+1).fill(noOfCount);
    dp[0]=0;
    for(let coin of coins){
         for(let i=coin;i<=amount;i++){
             let count = 1+dp[i-coin]
             dp[i]=Math.min(dp[i],count);
         }
    }
    // console.log(dp, "DP")
    return dp[amount]===noOfCount ? -1:dp[amount];
};

// console.log(coinChange([1,2,5],11))
function maxProduct(words: string[]): number {
    let hashMap:{[key:string]:number}={}
    function createNewSetWords(word:string){
         return new Set<string>([...word])
    }
    let i=0;
    while(i<words.length-1){
         let current = words[i];
         const setOfCharacters:Set<string>=createNewSetWords(words[i]);
         let j=i+1;
         while(j<words.length){
             const hasDuplicate=[...words[j]].some((cha:string)=>setOfCharacters.has(cha));
             console.log(hasDuplicate, "HAS DUPLICATE");
             if(!hasDuplicate){
                hashMap[words[i]]=hashMap[words[i]]&&hashMap[words[i]]>words[j].length ? hashMap[words[i]] : words[j].length;
                console.log(hasDuplicate, "HAS DUPLICATE");
             }
             j++;
         }
         i++
    }
    // console.log(hashMap, "HSHMAPAPA")
    let hashKeys = Object.keys(hashMap);
    let entries = Object.entries(hashMap);
    return hashKeys.length>0 ? entries.reduce((acc,[key,value])=>Math.max(acc, key.length * value),-1) :0
};

// console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));

function isUgly(n: number): boolean {
    if(n===0) return false;
    while(n%2===0){
        n=n/2
    }
    while(n%3==0){
        n=n/3
    }
    while(n%5===0){
        n=n/5
    }
    return n===1;
   
};

// console.log(isUgly(14))

function generate(numRows: number): number[][] {
     const arr:number[][]=[];
     for(let i=0;i<numRows;i++){
          arr[i]=[1];
          console.log(arr, 'arr')
          for(let j=1;j<i;j++){
             arr[i][j]=arr[i-1][j-1]+arr[i-1][j]
          }
          arr[i][i]=1;

          console.log(arr,arr[i][i], "After for loop")
     }
     return arr;
};

// console.log(generate(5))
function removeDuplicates4(nums: number[]): number {
    let index = 1;
    let current = nums[0];
    for(let i=1; i<nums.length; i++) {
         if(current!==nums[i]){
             nums[index]=nums[i];
             current=nums[i];
             index++;
         }
    }
    return index;
};

// console.log(removeDuplicates4([1,1,2]))

function searchTarget(nums: number[], target: number): number {
     let left =0;
     let right = nums.length-1;
     while(left<=right){
             let middle = Math.floor((left+right)/2);
             if(nums[middle]===target) return middle;
             if(nums[left]<=nums[middle]){
                   if(nums[left]<=target&&target <nums[middle]){
                       right = middle-1;
                   }else{
                       left=middle+1;
                   }
             }else{
                  if(target>nums[middle]&&target<=nums[right]){
                    left = middle+1;
                  }else right = middle-1;
             }
     }
     return -1;
};

// console.log(searchTarget([4,5,6,7,0,1,2],5));

function searchNumberFromArray(arr:number[], targetNum:number):number{
   
    let validIndex = arr.findIndex(elemnet =>elemnet===targetNum);
    console.log(validIndex);
    if(validIndex===-1){
        arr.push(targetNum);
        arr.sort((a:number,b:number)=>a-b);
        validIndex=arr.findIndex(element=>element===targetNum);
    }
    return validIndex;
}
console.log(searchNumberFromArray([1,3,5,6], 2), "Serach index")

///1,3,5,6,2
//1,2,3,5,6,8


function combinationSum(arr:number[], targetNum:number):number[][]{
    arr.sort((a:number,b:number)=>a-b);
    let length = arr.length;
    let results:number[][]=[];
    function backTrace(index:number, sum:number[], target:number):void{
         if(target===0) results.push(sum.slice(1));
         if(index===length)return;
         if(target<=0) return;
         sum.push(arr[index]);
         backTrace(index+1, sum, target-sum[index]);
         sum.pop();
         backTrace(index+1, sum,  target);
    }
    backTrace(0,[], targetNum);
    return results;
} 
console.log(combinationSum([2,3,6,7],7))
console.log("////////////////////")

function groupAnagramsPractice(strs:string[]):string[][]{
     const results:Record<string, string[]>={};
     for(let str of strs){
         let bianryCharacter = new Array<number>(26).fill(0);
         for(let charcter of str){
              bianryCharacter[charcter.charCodeAt(0)-97]++;
              console.log(bianryCharacter, "Binary character")
         }
         results[bianryCharacter.toString()]=[...(results[bianryCharacter.toString()]?? []), str]
         console.log(results,"after changing")
     }
     return Object.keys(results).map((key:string)=>results[key]);

}

// console.log(groupAnagramsPractice(["eat", "tea", "tan", "ate", "nat", "bat"]))


function subsets3(nums: number[]): number[][] {
    let results:number[][]=[];
    function recursion(temp:number[], nums:number[]):void{
          results.push(temp);
          for(let [index,value] of nums.entries()){
               recursion(temp.concat(value),nums.slice(index+1))
          }   
    }
    recursion([], nums);
    return results;
};

// console.log(subsets3([1,2,3]))
function plusOnePractice(digits: number[]): number[] {
    let lengthOfDigits = digits.length-1;
    if(lengthOfDigits===0&&digits[lengthOfDigits]===9) return [1,0];
    while(digits[lengthOfDigits]===9){
          digits[lengthOfDigits]=0
          if(lengthOfDigits===0) return [1, ...digits];
          lengthOfDigits--;
    }
    digits[lengthOfDigits]++;
    return digits;
};

console.log(plusOnePractice([1,2,3]))

function groupAnagramsPPPPP(strs: string[]): string[][] {
      let results:Record<string,string[]>={};
      for(let i=0;i<strs.length;i++) {
           let encodedStr:number[]= new Array<number>(26).fill(0);
           for(let str of strs[i]){
                 encodedStr[str.charCodeAt(0)-97]++;
           }
           results[encodedStr.toString()]=[...(results[encodedStr.toString()] ?? []), strs[i]]
      }
      return Object.keys(results).map((key)=>results[key])
};


// function combinationSum2(candidates: number[], target: number): number[][] {
//         let results:number[][]=[];
//         function recursion(arr:number, target:number){
//               if
//         }


// };

// console.log(combinationSum2([10,1,2,7,6,1,5], 8), "GDHBDJSJD")
function getRow(rowIndex: number): number[] {
    let results:number[][]=[];
    for(let i=0;i<rowIndex+1;i++){
         results[i]=[1];
         for(let j=1;j<i;j++){
             results[i][j]=results[i-1][j-1]+results[i-1][j];
         }
         results[i][i]=1;
    }
   const value = results[rowIndex];
   return value;
};

console.log(getRow(3))


// type Hello = {
//     value: string|number;
// }


// let variable = {
//       value: "jdfjdnfdf"
// } as Hello;


// variable.value.trim();



function permute(nums: number[]): number[][] {
    //console.log(nums, "INCOMING\n");
     let results:number[][]=[]
     if(nums.length===1) return [nums]
      for(let i=0; i<nums.length; i++) {
          let combination = permute([...nums.slice(0, i===0?0:i), ...nums.slice(i+1)]);
          for(let comArr of combination){
               results.push([...comArr,nums[i]])
          }
      }
     return results;
};
// const f = ["123"]
// console.log(f)

// console.log(permute([1,2,3]))

function permuteUnique(nums: number[]): number[][] {
     let results:number[][]=[];
     let permute:number[]=[];
     let hashMap:{[key:string]:number}={};
     for(let num of nums){
          hashMap[num]++;
     }
     function dfs():void{
         if(permute.length===nums.length){
             results.push(permute);
             return;
         }
         for(let n in hashMap){
            if(hashMap[n]> 0){
                 permute.push(Number(n));
                 hashMap[n]--;
                 dfs();
                 hashMap[n]++;
                 permute.pop()
            }
         }
     }
     dfs();
     return results;
        
};

console.log(permuteUnique([1,1,2]))


function combinationSumTest(candidates: number[], target: number, dp:number[][]=[]): number[][] {
          let globalResults:number[][]=[];
          function dfs(i:number, arr:number[], temp:number[], targetSum:number):void{
                //Backtracking case
                 if(targetSum<0) return;
                //base case
                 if(targetSum===0) globalResults.push(temp.slice());

                //recursion
                for(let j=i;j<candidates.length;j++){
                      temp.push(candidates[j]);
                      dfs(j,arr, temp, targetSum-candidates[j]);
                      console.log(temp, "Before POP")
                      temp.pop();
                      console.log(temp, "After POP")
                }
          }

          dfs(0, candidates, [], target);
          return globalResults;
};

console.log(combinationSumTest([2,3,6,7], 7))

function combinationSum2(candidates: number[], target: number): number[][] {
      let globalResults:number[][]=[];
      candidates.sort((a:number,b:number)=>a-b)
      function dfs(index:number,arr:number[], temp:number[], targetSum:number):void{
          //backtracking
              if(targetSum<0) return;
          //Base case 
             if(targetSum===0) {
                globalResults.push(temp.slice());
                return;
             };
          //recursion
          for(let j=index;j<arr.length;j++){
              if(index!==j&&arr[j]===arr[j-1]) continue;
               temp.push(arr[j]);
               dfs(j+1, arr,temp, targetSum-arr[j]);
               temp.pop();
          }
      }
      dfs(0,candidates, [],  target)
      return globalResults;
};

console.log(combinationSum2([10,1,2,7,6,1,5],8))

function merge2(intervals: number[][]): number[][] {
    intervals.sort((a:number[],b:number[])=>a[0]-b[0]);
     let myStack:number[][]=[];
     myStack.push(intervals[0]);
     for(let interval of intervals){
          let endIndex1=myStack[myStack.length-1][1];
          let startIndex2=interval[0];
          let endIndex2=interval[1];
          if(endIndex1>=startIndex2) myStack[myStack.length-1][1]=Math.max(endIndex1, endIndex2);
          else myStack.push(interval);
     }
     return myStack;
};

console.log(merge2([[1,3],[2,6],[8,10],[15,18]]))

function groupAnagramsPracticeTest(strs: string[]): string[][] {
       let results:Record<string, string[]>={};
        for(let str of strs){
              let encodedStr = new Array<number>(26).fill(0);
              for(let character of str){
                   encodedStr[character.charCodeAt(0)-97]++;
              }
              results[encodedStr.toString()]=[...(results[encodedStr.toString()]??[]), str]
        }

        return Object.keys(results).map((key:string)=>results[key]);
};


function mergev3(intervals: number[][]): number[][] {
        intervals.sort((a:number[], b:number[])=>a[0]-b[0]);
         let myStack:number[][] = [];
         myStack.push(intervals[0]);
        for(let interval of intervals){
             let endIndex1 = myStack[myStack.length-1][1];
             let startIndex2 = interval[0];
             let endIndex2 = interval[1];
             if(endIndex1>=startIndex2){
                  myStack[myStack.length-1][1]=Math.max(endIndex1, endIndex2);
             }else myStack.push(interval)
        }
        return myStack;

};


function checkTree(root: TreeNode | null): boolean {
         return root!.val===root!.left!.val+root!.right!.val;
};

console.log()

function createBinaryTree2(descriptions: number[][]):TreeNode|null{

    let nodeMap:Map<number,TreeNode>= new Map<number, TreeNode>();
    for(let node of descriptions){
        let parent = node[0];
        let child=node[1];
        let isLeftNode:boolean = node[2]===1;
        const parentNode = nodeMap.get(parent)?? new TreeNode(parent);
        nodeMap.set(parent, parentNode);
        const childNode = nodeMap.get(child)??new TreeNode(child);
        nodeMap.set(child, childNode);
        if(isLeftNode){
            parentNode.left = childNode;
        }else parentNode.right=childNode;
    }
    // console.log("after created node", nodeMap);
    const mainRootNode = new Set<number>(nodeMap.keys());
    console.log("set", mainRootNode)
    for(let node of descriptions){
        let child = node[1];
        mainRootNode.delete(child);
    }
    console.log("After Delete", mainRootNode)
    let root = mainRootNode.values().next().value;
    return nodeMap.get(root)!;
}

// console.log(createBinaryTree2([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]))


function getDirections(root:TreeNode|null , startValue:number, destValue:number):string{
     const path:string[][]=[[],[]];
     function helper(node:TreeNode|null, path:string[][], startValue:number, destValue:number):boolean[]{
           if(!node) return [false, false];
           const leftStatus = helper(node.left, path, startValue, destValue);
           const rightStatus = helper(node.right, path, startValue, destValue);
           if((leftStatus[0]&&leftStatus[1])|| (rightStatus[0]&&rightStatus[1])){
                 return [true, true];
           }
           if(leftStatus[0]){
              path[0].push("U");
           }else if(leftStatus[1]){
                path[1].push("L");
           }

           if(rightStatus[0]){
            path[0].push("U");
         }else if(rightStatus[1]){
              path[1].push("R");
         }

         return [leftStatus[0]|| rightStatus[0]|| node.val=== startValue, leftStatus[1]||rightStatus[1] || node.val===destValue]
     }

     helper(root, path, startValue, destValue);
     return path.flatMap((p)=>p.reverse()).join("")
}


const nodeRoot = new TreeNode(5);
nodeRoot.left = new TreeNode(1);
nodeRoot.right = new TreeNode(2);
nodeRoot.left.left = new TreeNode(3);
nodeRoot.right.right = new TreeNode(4);
nodeRoot.right.left = new TreeNode(6);

// console.log(getDirections(nodeRoot, 3, 6));

// function numSquares(n: number): number {
//      let count:number[][] =[];
//      function recursion(index:number, totalSum:number,temp:number[]):void{
//             ///backtracking
//             if(totalSum<0) return
//             ///base case
//             if(totalSum===0){
//                 count.push(temp)
//                   return;
//             }
//             ///DFS recursive
//             totalSum-= Math.sqrt(index);
//      }
//      recursion(2, n);
//      return count.length;

// };

// console.log(numSquares(12));
// console.log(numSquares(13));

function numSquares(n:number):number{
     let dp = new Array(n+1).fill(Infinity);
     dp[0]=0;
     let p=1;
     while(p*p<=n){
          let sq = p*p;
          for(let i=sq;i<n+1;i++){
              dp[i]=Math.min(dp[i-sq]+1,dp[i]);
          }
          p++;
     }
     return dp[n];
}
// console.log(numSquares(12));

function distributeCoins(root: TreeNode | null): number {
     let numberOfMoves:number =0;
     distributionFunction(root);
     function distributionFunction(node:TreeNode|null):number{
          if(node===null) return 0;
          let leftSide = distributionFunction(node.left);
          let rightSide = distributionFunction(node.right);
          numberOfMoves +=Math.abs(leftSide)+Math.abs(rightSide);
          return node.val+leftSide+rightSide-1;
     }
     return numberOfMoves;
};


const coins = new TreeNode(3);
coins.right = new TreeNode(0);
coins.left = new TreeNode(0);

console.log(distributeCoins(coins));

function isCousins(root:TreeNode|null, x:number,y:number):boolean{
      if(root==null) return false;

      let myQueue:TreeNode[]=[root];
      while(myQueue.length!==0){
         let currentLevel=new Set<number>();
         const size:number=myQueue.length;
         for(let i=0;i<size;i++){
            let currentNode:TreeNode = myQueue.shift() as TreeNode;
            if(currentNode.left&&currentNode.right){
                if((currentNode.left.val===x&&currentNode.right.val)||(currentNode.left.val===y&&currentNode.right.val===x)) return false;
                else {
                    currentLevel.add(currentNode.left.val);
                    currentLevel.add(currentNode.right.val);
                    myQueue.push(currentNode.left);
                    myQueue.push(currentNode.right);
                }
            }else if(currentNode.left){
                currentLevel.add(currentNode.left.val);
                myQueue.push(currentNode.left);
            }else if(currentNode.right){
                currentLevel.add(currentNode.right.val);
                myQueue.push(currentNode.right);
            }
      }
      if(currentLevel.has(x)&&currentLevel.has(y)){
          return true;
      }
     }
     return false;
}

class Stack {
    private elems: number[] = [];
  
    static create() {
      return new Stack();
    }
  
    push(elem: number) {
      return this.elems.push(elem);
    }
  
    empty() {
      return this.elems.length === 0;
    }
  
    top() {
      return this.empty() ? -1 : this.elems[this.elems.length - 1];
    }
  
    pop() {
      return this.elems.pop();
    }
  }
  
  const modulo = Math.pow(10, 9) + 7;
  
  function sumSubarrayMins(arr: number[]) {
    let sum = 0;
    const stack = Stack.create();
    const newArr = [...arr, Number.MIN_SAFE_INTEGER];
  
    for (let i = 0; i < newArr.length; ++i) {
      while (!stack.empty() && newArr[stack.top()] > newArr[i]) {
        const cur = stack.pop() as number;
        const prev = stack.top();
  
        sum += (i - cur) * (cur - prev) * newArr[cur];
      }
  
      stack.push(i);
    }
  
    return sum % modulo;
  }

// console.log(sumSubarrayMins([3,1,2,4]))


function largestValues(root: TreeNode | null): number[] {
     if(root===null) return [];
     let currLevel:TreeNode[]=[root];
     let nextLevel:TreeNode[]=[];
     let maxValue=Number.MIN_SAFE_INTEGER;
     let results:number[]=[];
    while(currLevel.length>0){
        const currentNode=currLevel.shift() as TreeNode;
        if(currentNode.val>maxValue) maxValue= currentNode.val;
        if(currentNode.left) nextLevel.push(currentNode.left);
        if(currentNode.right) nextLevel.push(currentNode.right);

        if(!currLevel.length){
            results.push(maxValue);
            maxValue = Number.MIN_SAFE_INTEGER;
            [currLevel, nextLevel]=[nextLevel, currLevel];
        }
    }
     return results;
};

function isBalanced(root: TreeNode | null): boolean {
      function helper(node:TreeNode|null):number{
          if(!node) return 0;
          let left = helper(node.left);
          let right = helper(node.right);
          if(left<0||right<0||Math.abs(left-right)>1) return -1;
          return Math.max(left,right)+1;
      }
     return helper(root)!==-1;
};

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
        if(!root1&&!root2) return true;
        if(!root1||!root2) return false;
        if(root1.val!== root2.val) return false;
        return (flipEquiv(root1.left, root2.left)&&flipEquiv(root1.right, root2.right))||(flipEquiv(root1.right,root2.left)&&flipEquiv(root1.left,root2.right));
};

function isUnivalTree(root: TreeNode | null): boolean {
        if(root == null) return false;

        function helper(node:TreeNode|null):number{
              if(!node) return 0;
              let left = helper(node.left);
              let right = helper(node.right);
              if(left===right) return 1
              else return -1
        }
     return helper(root)===1;
};

function findMode(root: TreeNode | null): number[] {
    let hashmap:{[key:string]:number}={};
    let maxValue = 0;
    function traverse(node:TreeNode|null):void{
          if(!node) return;
          traverse(node.left);
         if(node.val in hashmap){
              hashmap[node.val]++;
         }else{
              hashmap[node.val] = 1;
         }
         if(hashmap[node.val]>maxValue){
              maxValue = hashmap[node.val];
         }
         traverse(node.right);
    }
    traverse(root);
    return Object.entries(hashmap).filter(([key, value])=>value===maxValue).map(([key])=>Number(key))
};

class RandomizedSet{
    myHashMap:{[key:string]:boolean}
    constructor() {
      this.myHashMap = {};
    }

    insert(val: number): boolean {
        if(!this.myHashMap[val]){
             this.myHashMap[val]=true;
             return true;
        }
        return false;
         
    }

    remove(val: number): boolean {
          if(this.myHashMap[val]){
               delete (this.myHashMap[val]);
               return true;
          }
          return false;
    }

    getRandom(): number {
      let keys = Object.keys(this.myHashMap);
      if(keys.length>0){
           let randomNumber = Math.floor((Math.random()* keys.length));
           let randomKey = keys[randomNumber];
           return Number(randomKey);
      }
      return -1;
    }
}


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
      if(root===null) return null;
      if(key<root.val){
           root.left = deleteNode(root.left, key);
           return root;
      }else if(key>root.val){
          root.right = deleteNode(root.right,key);
          return root;
      }

      if(!root.left) return root.left;
      if(!root.right) return root.right;

      let right = root.right as TreeNode;
      let  minValue = right.val;
      while(right){
          minValue = right.val;
          right=right.left as TreeNode;
      }

      root.val = minValue;
      root.right = deleteNode(root.right, minValue)
      return root;
};  

// const deleteTreeNode = new TreeNode(5);
// deleteTreeNode.left = new TreeNode(3);
// deleteTreeNode.left.left = new TreeNode(2);
// deleteTreeNode.left.right = new TreeNode(4);
// deleteTreeNode.right = new TreeNode(6);
// deleteTreeNode.right.right = new TreeNode(7);

// console.log(deleteNode(deleteTreeNode, 3));

function findBottomLeftValue(root: TreeNode | null): number {
      if(root===null) return 0; 
      let level = 0;
      let levels:TreeNode[][]=[];
      let queue:TreeNode[]=[root]
      while(queue.length){
          levels.push([]);
          const newQueue:TreeNode[] = [];
          while(queue.length){
              const currentNode = queue.shift() as TreeNode;
              levels[level].push(currentNode);
              if(currentNode.left) queue.push(currentNode.left);
              if(currentNode.right) queue.push(currentNode.right);
          }
          queue =newQueue;
          level++;
      }

      console.log(levels, "LEVELS")
      return levels[levels.length-1][0].val;
};

const deleteTreeNode = new TreeNode(5);
deleteTreeNode.left = new TreeNode(3);
deleteTreeNode.left.left = new TreeNode(2);
deleteTreeNode.left.right = new TreeNode(4);
deleteTreeNode.right = new TreeNode(6);
deleteTreeNode.right.right = new TreeNode(7);

// console.log(findBottomLeftValue(deleteTreeNode));

function uniqueOccurrences(arr: number[]): boolean {
       let myMap:{[key:string]:number}={}
       let i=0;
       while(i<=arr.length-1){
            if(arr[i] in myMap){
                 myMap[arr[i]]++;
            }else{
                myMap[arr[i]]=1;
            }
            i++;
       }
       console.log(new Set([...arr]), "My Map");
       let isMatch  = 0;
       let are = Object.values(myMap).sort((a:number,b:number)=>a-b);
       for(let i=0;i<are.length;i++){
           if(are[i]===isMatch) return false;
           isMatch = are[i];
       }
       return true;
};

// console.log(uniqueOccurrences([1,2,2,1,1,3]))

function rob(nums: number[], value:number=0,index:number=0,map:{[key:string]:number}={}): number {
    if(!nums || nums.length===0) return 0;

    const dp:number[]=new Array<number>(nums.length).fill(0);
    dp[0]=nums[0];
    dp[1]=Math.max(dp[0],nums[1]);

    for(let i=2;i<nums.length;i++){
         dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
    console.log(dp,"D{P")
    return dp[nums.length-1]
};

// console.log(rob([1,2,3,1]))


function halvesAreAlike(s: string): boolean {
    let vowels:string[]=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let middle = Math.floor(s.length/2);
    let leftSide = Array.from(s.substring(0,middle));
    let rightSide = Array.from(s.substring(middle, s.length+1));
    let leftSideFilter:number = leftSide.filter(vowel=>vowels.includes(vowel)).length;
    let rightSideFilter:number = rightSide.filter(vowel=>vowels.includes(vowel)).length;
    if(leftSideFilter===rightSideFilter) return true;
    return false;
};


// console.log(halvesAreAlike("book"))
function findTheDifference(s: string, t: string): string {
    const contain:string[]=t.split("");
    for(let char of s){
         let index = contain.indexOf(char);
         if(index>-1) contain.splice(index,1);
    }

    return contain[0];
};

console.log(findTheDifference('a', 'aa'))


function closeStrings(word1: string, word2: string): boolean {
    if (word1.length <word2.length) return false;
    const mapWord1: Map<string, number> = new Map<string, number>();
    const mapWord2: Map<string, number> = new Map<string, number>();
  
    for (let i=0; i<word1.length; i++) {
        const char1 = word1[i];
        const char2 = word2[i];
        mapWord1.set(char1, (mapWord1.get(char1)?? 0)+1);
        mapWord2.set(char2, (mapWord2.get(char2)?? 0)+1);
    }

    for(let key of mapWord1.keys()){
        if(!mapWord2.has(key)) return false;
    }

    const str1 = [...mapWord1.values()].sort((a:number,b:number)=>a-b).toString();
    const str2 = [...mapWord2.values()].sort((a:number,b:number)=>a-b).toString();
  
    return str1===str2;
  };

  function restoreIpAddresses(s: string): string[] {
   let answer:string[]=[];
    if(s.length>12) return answer;
    function recusrion(index:number, dots:number, currentIP:string):void{
            if(dots===4&&index==s.length){
                  answer.push(currentIP.slice(0,currentIP.length-1));
                  return;
            }
            if(dots>4) return;
            for(let j=index;j<Math.min(index+3, s.length);j++){
                if(Number(s.slice(index, j+1))<256&&(index===j||s[index]!=="0")){
                     recusrion(j+1, dots+1, currentIP+s.slice(index, j+1)+".");
                }
            }
    }
    recusrion(0,0,"")
    return answer;
};

console.log(restoreIpAddresses("25525511135"))


function wordBreak(s: string, wordDict: string[]): boolean {
   let mySet:Set<string>=new Set(wordDict);
   console.log(mySet, "SET")
   let memo = new Array(s.length);
   function recursion(index:number):boolean{
         if(index===s.length){
             return true;
         }
         if(memo[index]!==undefined){
             return memo[index];
         }

         let found = false;
         for(let i=index+1; i<=s.length;i++){
            console.log(s.substring(index,i))
             if(mySet.has(s.substring(index,i))){
                if(recursion(i)){
                    found=true
                }
             }
         }
         memo[index]=found;
         return found;
   }
   
   return recursion(0);
};

// console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"]))


function minimumAverageDifference(nums: number[]): number {
    if(nums.length===1) return 0;
    let sumOfNegative:number=nums.reduce((prev:number,current:number)=>prev+current);
    let sumOfPositive:number=0;
    let minimumValue = Number.MAX_SAFE_INTEGER;
    let results:number=0;
    for(let i=0; i<nums.length; i++){
         sumOfPositive+=nums[i];
         sumOfNegative-=nums[i];
         const average=Math.abs(Math.floor(sumOfPositive/(i+1))-Math.floor(sumOfNegative/(nums.length-i-1 || 1)));
         if(average<minimumValue){
             minimumValue=average;
             results=i;
         }

    }
    return results;
};

// console.log(minimumAverageDifference([2,5,3,9,5,3]))


function calculate(digits:string):string[]{
    let phoneBookRecord:Record<string,string>={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }

    const results:string[]=[];
    if(digits.length===0) return [];
    function recursion(index:number, currentStr:string):void{
        //Base Case//
        if(currentStr.length===digits.length){
            results.push(currentStr);
            return;
        }
        let isLetterExist = phoneBookRecord[digits.charAt(index)];
        for(let cha of isLetterExist.split("")){
              recursion(index+1, currentStr+cha);
        }
    }
    recursion(0,"")
    return results;
}

// console.log(calculate("23"))

function generateParenthesis(n: number): string[] {
      if(n===0) return [];
      let myStack:string[]=[];
      let answer:string[]=[];
      function recusrsion(openEnd:number, closedEnd:number):void{
           if(openEnd===closedEnd&&openEnd===n&&closedEnd===n){
               answer.push(myStack.join(""));
               return;
           }

           if(openEnd<n){
              myStack.push("(");
              recusrsion(openEnd+1,closedEnd);
              myStack.pop(); 
           }
           if(closedEnd<openEnd){
             myStack.push(")");
             recusrsion(openEnd, closedEnd+1);
             myStack.pop();
           }
      }
    recusrsion(0,0)
      return answer;
};

// console.log(generateParenthesis(3))


function middleNode(head: ListNode | null): ListNode | null {
    if(!head) return null;
    let slow:ListNode|null = head;
    let fast=head;
    while(fast&&fast.next){
        slow = slow?.next as ListNode|null;
        fast = fast.next.next as ListNode;
    }
    return slow;

};

function permuteUnique2(nums: number[]): number[][] {
     let results:number[][]=[]
     if(nums.length<1) return [];
     nums.sort((a:number,b:number)=>a-b);
     function recursion(restValue:number[],currentValue:number[]):void{
           //Base case:
            if(currentValue.length===nums.length) {
                  results.push(currentValue);
                  return;
            }

            for(let i=0;i<restValue.length;i++){
                 if(!(i+1<restValue.length&&restValue[i]===restValue[i+1])){
                     recursion([...restValue.slice(0,i),...restValue.slice(i+1)], [...currentValue, restValue[i]])
                 }
                 
            }
     }

     recursion(nums, [])
     return results;
};

// console.log(permuteUnique2([1,1,2]))


function combine(n: number, k: number): number[][] {
    let results:number[][]=[];
    function recursion(index:number,temp:number[]):void{
         if(temp.length===k){
              results.push(temp);
              return;
         }
         for(let i=index;i<=(n-(k-(temp.length+1)));i++){
               recursion(i+1, [...temp,i]);
         }
    }

    recursion(1,[]);
    return results;
};

// console.log(combine(4,2))

function exist(board: string[][], word: string): boolean {
    let hashmap:{[key:string]:number}={};
    let i=0;
    while(i<board.length){
          let current:string[]=board[i];
          let j=0;
          while(j<current.length){
               if(current[j] in hashmap){
                   hashmap[current[j]]++;
               }else{
                   hashmap[current[j]]=1;
               }
               j++;
          }
          i++;
    }
    console.log(hashmap);
    for(let k=0;k<word.length;k++){
          if(word[k] in hashmap){
              if(hashmap[word[k]]===0) return false;
              hashmap[word[k]]--;
          }else return false
    }
    return true;
};

// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))

function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a:number,b:number)=>a-b);
     let results:number[][]=[];
     function recursion(index:number, temp:number[]):void{
          results.push(temp.slice());
          for(let i=index; i<nums.length; i++){
               if(i>index&&nums[i]===nums[i-1]) continue;
               temp.push(nums[i]);
               recursion(i+1, temp);
               temp.pop();
          }
     }
     recursion(0,[]);
     return results;
};

// console.log(subsetsWithDup([1,2,2]))

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
      let results:number[][]=[];
      function recursion(node:TreeNode|null, target:number, temp:number[]):void{
                if(!node) return;
                if(!node.left&&!node.right){
                    if(target+node.val===targetSum){
                        results.push([...temp,node.val]);
                    }
                    return;
                }
                recursion(node.left, target+node.val,[...temp, node.val]);
                recursion(node.right, target+node.val,[...temp, node.val]);
      }
      recursion(root, 0,[]);
      return results;
};
const Inode= new TreeNode(5);
Inode.left=new TreeNode(4);
Inode.right = new TreeNode(8);
Inode.left.left = new TreeNode(11);
Inode.left.left.left = new TreeNode(7);
Inode.left.left.right=new TreeNode(2);
Inode.right.left=new TreeNode(13);
Inode.right.right = new TreeNode(4);
Inode.right.right.left = new TreeNode(5);
Inode.right.right.right=new TreeNode(1);

// console.log(pathSum(Inode,22))

function combinationSum3(k: number, n: number): number[][] {
   let results:number[][]=[];
   function recursion(index:number, temp:number[], sum:number):void{

      console.log(sum, temp, index, "RESULTSS")
      if(sum===n&&temp.length===k){
          results.push(temp);
          return;
      }
      for(let i=index;i<=9;i++){
          recursion(i+1, [...temp,i], sum+i);
      }
   }
   recursion(1,[],0);
   return results;
};

// console.log(combinationSum3(3,7))

function countNumbersWithUniqueDigits(n:number):number{
      if(n===0) return 1;
      let result:number=1;
      while(n>0){
          let temp=1;
          for(let i=0;i<n;i++){
             temp*=Math.min(10-i,9);
          }
          result+=temp;
          n--;
      }
      return result;
}

function binaryTreePaths(root: TreeNode | null, tempStr:string, resultStr:string[]): string[] {
       if(root===null) return [];
       if(root&&root.left===null&&root.right===null){
        tempStr+=`${root.val}`;
       }else{
        tempStr+=`${root.val}-->`;
       }
       binaryTreePaths(root.left, tempStr, resultStr);
       if(root.left===null&&root.right===null){
        resultStr.push(tempStr);
       }
       binaryTreePaths(root.right, tempStr, resultStr);
       return resultStr;
};

// console.log(binaryTreePaths(Inode, "",[]))
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
        if(!root) return 0;
        let queue:TreeNode[]=[root];
        let sum:number=0;
        while(queue.length){
             let current = queue.shift() as TreeNode;
             if(current.val>=low&&current.val<=high){
                  sum+=current.val;
             }
             if(current.left) queue.push(current.left);
             if(current.right) queue.push(current.right);
        }
        return sum;
};

// console.log(rangeSumBST(Inode, 4,11, ))

// function findSubsequences(nums: number[]): number[][] {
//        let answer:number[][]=[];
//         function recursion(index:number, temp:number[]):void {
//              //base case
//              if(temp.length>=2){
//                   answer.push(temp.slice());
//                   return;
//              }
//              const usedTemp:Set<number>=new Set<number>();
//              for(let i=index;i<nums.length;i++){
//                 if(temp.length>0&&(nums[i]<temp[temp.length-1]||usedTemp.has(nums[i])))continue;
//                 usedTemp.add(nums[i]);
//                 temp.push(nums[i]);
//                 recursion(i+1, temp);
//                 temp.pop();
//              }
//              return;
//         };
//        recursion(0,[]);
//        return answer;
// };

// console.log(findSubsequences([4,6,7,7]))

const findSubsequences = function(nums:number[]) {
    if(nums.length < 2) return [];
    const result:number[][] = [];
    // const path:number[] = [];
    const backtrack = function(startIndex:number, temp:number[]) {
        if(temp.length >= 2) {
            result.push(temp.slice());
        }
        const used = new Set(); 
        for(let i = startIndex; i < nums.length; i++) {
            if(temp.length > 0 && nums[i] < temp[temp.length - 1] || used.has(nums[i])) continue;
            used.add(nums[i]);
            temp.push(nums[i]);
            backtrack(i + 1, temp);
            temp.pop();
        }
        return;
    }
    backtrack(0,[]);
    return result;
};

console.log(findSubsequences([4,6,7,7]))

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
     let root1List:number[]=[];
     let root2List:number[]=[];
     function recursion(node:TreeNode|null, arr:number[]):void {
            if(node===null) return;
            if(node&&node.left==null&&node.right==null) {
                  arr.push(node.val);
            }
            recursion(node.left, arr);
            recursion(node.right, arr);
     }
     recursion(root1, root1List);
     recursion(root2, root2List);
     let i=0,j=0;
     root1List.sort((a:number,b:number)=>a-b);
     root2List.sort((a:number,b:number)=>a-b);
     while(i<root1List.length||j<root2List.length){
           if(root1List[i]===root2List[j]) continue;
           else return false;
     }
     return true;
};


function generateTrees(n: number): Array<TreeNode | null> {
     function helper(index:number, limit:number):Array<TreeNode|null>{
         if(index===limit) return [new TreeNode(index)];
         else {
            let temp:Array<TreeNode|null>=[];
            for(let i=index;i<limit+1;i++){
                 let left = i!==index ? helper(index, i-1): [null];
                 let right = i!= limit ? helper(i+1, limit):[null];
                 for(let leftTree of left){
                     for(let rightTree of right){
                        let node = new TreeNode(i);
                        node.left = leftTree;
                        node.right = rightTree;
                        temp.push(node); 
                     }
                 }
            }
            return temp;
         }
     }
     return helper(1,n);
};

function maxAncestorDiff(root: TreeNode | null): number {
      if(root===null) return 0;
      function getMaximumDiff(x:number,a:number,b:number):number{
         return Math.max(Math.abs(x-a), Math.abs(x-b)); 
      }
      function recursion(current:TreeNode|null, prevMin:number, prevMax:number):number{
          if(!current) return 0;
          const results = getMaximumDiff(current.val, prevMin, prevMax);
          const min = Math.min(prevMin, current.val);
          const max = Math.max(prevMax, current.val);
          return Math.max(
             results,
             recursion(current.left, min,max),
             recursion(current.right, min,max)
          )
      }
     return Math.max(
        recursion(root.left, root.val, root.val),
        recursion(root.right, root.val, root.val)
     );
};
const nodeValue = new TreeNode(1);
nodeValue.left = new TreeNode(2);
nodeValue.right = new TreeNode(3);
console.log(maxAncestorDiff(nodeValue));


function maxProductQuestion(root:TreeNode|null):number{
     let subTrees:number[]=[];
     let maxValue:number = 0;
     const DFS = (node:TreeNode|null)=>{
         if(node===null) return 0;
         if(node.left===null&&node.right===null) return node.val;
         const sumLeft = DFS(node.left) as number;
         const sumRight = DFS(node.right) as number;
         subTrees.push(sumLeft,sumRight);
         return sumLeft + sumRight+node.val;
     }
     const totalSum = DFS(root);
     for(let subTree of subTrees) {
          maxValue = Math.max(maxValue, subTree * (totalSum-subTree));
     }
     return maxValue % (Math.pow(10,9)+7);
}

function maxProfit(prices: number[]): number {
      let results:number=0;
       

      return results;
};

// console.log(maxProfit([1,2,3,4,5]));

function thirdMax(nums:number[]):number{
    nums.sort((a:number,b:number)=>a-b);
    let results:number[]=[];
    let hashMap:{[key:string]:boolean}={};
    for(let i=0;i<nums.length;i++){
         if(!hashMap[nums[i]]){
             hashMap[nums[i]]=true
             results.push(nums[i]);
         }
    };
    if(results.length<3) return results[results.length-1];
    else return results[results.length-3];
}

function findDisappearedNumbers(nums: number[]): number[] {
   nums.sort((a:number,b:number)=>a-b);
   let hashMap:{[key:string]:number}={};
   for(let i=1;i<=nums[nums.length-1];i++){
       if(!hashMap[i]){
           hashMap[i]++;
       }
   }
   console.log(hashMap, "HashMap")
   console.log(Object.entries(hashMap).filter(([key,value], index)=>(index+1)!==Number(key)));
   return []
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))



















