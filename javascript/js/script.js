    function myFunction(){
      var a = document.getElementById("InputA").value;
      var b = document.getElementById("InputB").value;
      var a = +a, b = +b ;
      if(a==b){
        alert(a*6);
      }
      else{
        alert(a+b);
      }
    }
    function myFunction1(){
      var c = document.getElementById("InputC").value;
      var c = +c;
      if(c<19){
        alert(19-c)
      }
      else{
        alert((c-19)*3)
      }
    }
    function myFunction2(){
      var sum=0;
      var arr0=['0','3','6','9'];
      var arr1=['1','4','7'];
      var arr2=['2','5','8'];
      var result = [];
      var c = document.getElementById("InputD").value;
      var arr=c.slice(0,c.length);
      for(var i=0;i<c.length; i++){
        if(arr[i]!=='*'){
          sum+=parseInt(arr[i]);
        }
      }
      if(sum%3===0){
        for(var i=0;i<arr0.length; i++){
          var res=c.replace("*",arr0[i])+"-";
          result+=res;
        }
      }else if(sum%3===1){
        for(var i=0;i<arr2.length; i++){
          var res=c.replace("*",arr2[i])+"-";
          result+=res;
        }
      }else{
        for(var i=0;i<arr1.length; i++){
          var res=c.replace("*",arr1[i])+"-";
          result+=res;
        }
      }
      alert(result);
    }
    function myFunction3(){
      var sum=0;
      var arr0=['0','6'];
      var arr1=['4'];
      var arr2=['2','8'];
      var result = [];
      var c = document.getElementById("InputE").value;
      var arr=c.slice(0,c.length);
      if(c[c.length-1]%2==0 || c[c.length-1]=='*'){
        for(var i=0;i<c.length; i++){
          if(arr[i]!=='*'){
            sum+=parseInt(arr[i]);
          }
        }
        if(sum%3===0){
          for(var i=0;i<arr0.length; i++){
            var res=c.replace("*",arr0[i])+"-";
            result+=res;
          }
        }else if(sum%3===1){
          for(var i=0;i<arr2.length; i++){
            var res=c.replace("*",arr2[i])+"-";
            result+=res;
          }
        }else{
          for(var i=0;i<arr1.length; i++){
            var res=c.replace("*",arr1[i])+"-";
            result+=res;
          }
        }
        alert(result);
      }else{
        alert('Nhap lai di ban');
      }
    }
