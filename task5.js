//Find how many palindrome numbers are there in the array.
document.write("TASK-5"+"<br>");
let arr=[123,454,678,98789,355,222];
function palindrome(arr){
    let emp=[];
    for(let i=0;i<arr.length;i++){
        let n=arr[i];
        let rev=0;
        while(n!=0){
            let rem=n%10;
            rev=(rev*10)+rem;
            n=parseInt(n/10);
        }
        // console.log(rev);
        emp.push(rev);

    }
    return new Promise((res,rej)=>{
        
        res([emp,arr])
        
    })
}
function check(a,b){
    let find=0;
    for(let i=0;i<a.length;i++){
        for(let j=i;j===i;j++){
            if(a[i]==b[j]){
                find++;
            }
        }
    }
    return new Promise((res,rej)=>{
        res("1. Number of Palindrome in array : "+find);
    })
    
}
palindrome(arr).then(([x,y])=>{
    // console.log(x,y);
    check(x,y).then((z)=>{
        console.log(z);
        document.write(z+"<br>");
    })
})
palindrome(arr).catch(console.log);
// console.log(palindrome(arr));
/*....................................................................*/
var arr1=[789,234,55,63,12];
function count(arr1){
    let temp=arr1;
    let ans=[];
    for(let i=0;i<temp.length;i++){
        let s=0;
        while(temp[i]!=0){
            let rem=temp[i]%10;
            s=s+rem;
            temp[i]=parseInt(temp[i]/10);
        }
        ans.push(s);
    }
    return new Promise((res,rej)=>{
        res(ans)
        // rej("Exit")
    })
}
function eoo(x){
    let a=[],b=[];
    for(let i=0;i<x.length;i++){
        if(x[i]%2==0){
            a.push(x[i]);
        }
        else{
            b.push(x[i]);
        }
    }
    return new Promise((res,rej)=>{
        if(a.length<b.length){
            res("2. Odd length is greatest")
        }
        else{
            rej("2. Even length is Greatest");
        }
    })
}

count(arr1).then((ans)=>{
    eoo(ans).then((op)=>{
        console.log(op);
        document.write(op+"<br>");
    })
})
count(arr1).catch(console.log);
/*..........................................................................*/
let arr2=[345,407,1634,889,244];
function length(arr2){
    let x=arr2,emp=[];
    for(let i=0;i<x.length;i++){
        let n=x[i];
        let count=0;
        while(n!=0){
        let rem=n%10;
        n=(n-rem)/10;
        count++; 
        }
    emp.push(count);
    }
    return new Promise((res,rej)=>{
        res([emp,x])
    })
}
function arms(a,b){
    let ne=[];
    // console.log(a.length);
    // console.log(b);
    for(let i=0;i<a.length&& i<b.length;i++){
        // for(let j=0;j<b.length;j++){
            let n=b[i];
            // console.log(n);
            let m=a[i];
            // console.log(m);
            let s=0;
            while(n!=0){
                let rem=n%10;
                // console.log(rem);
                n=(n-rem)/10;
                s+=rem**m; 
            }
            ne.push(s);
        // }
    }
    // ne.push(s);
    // console.log(ne);
    return new Promise((res,rej)=>{
        res([ne,b])
    })
}
function final(u,v){
    let c=0;
    for(let i=0;i<u.length && i<v.length;i++){
        
        if(u[i]==v[i]){
            c++;
        }
    }
    return new Promise((res,rej)=>{
        res("3. Number of Armstrong in array : "+c)
    })
}
length(arr2).then(([emp,x])=>{
    // console.log(emp,x);
    arms(emp,x).then(([u,v])=>{
        // console.log(u,v);
        final(u,v).then((x)=>{
            console.log(x)
            document.write(x);
        })
    })
})
length(arr2).catch(console.log);
