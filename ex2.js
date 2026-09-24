function  getInitials(fullName){
    let arr=fullName.split(" ")
    x=""
    for(let i of arr){
        x=x+i[0]
    }
    return x
}
console.log(getInitials("Abdelhakim Boukrim"))
console.log(getInitials("Yassine Bahajou"))
console.log(getInitials("Sara Amine El Idrissi"));