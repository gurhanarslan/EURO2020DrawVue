<template>
  <div class="container" id="pool">
    
   <div class="col-12 text-center mt-4">
        <button class="btn btn-danger" v-if="button"   @click="repool">Kurayı Sıfırla</button>
      </div>    
    <pool-section :name="title"  @Pool="pool()" @pool1="pool1=$event" @pool2="pool2=$event" @pool3="pool3=$event" @pool4="pool4=$event" ></pool-section>

    <div class="row">
      <div class="col-md-4 col-12 rounded kare mt-5">
        <div class="text-center bg-primary text-white rounded">Group A</div>
        <table class="table table-striped mt-3">
          <tbody>
            <tr v-for="(item,i) in GroupA">
              <td>{{i+1}}.</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-12 rounded kare mt-5">
        <div class="text-center bg-primary text-white rounded">Group B</div>
        <table class="table table-striped mt-3">
          <tbody>
            <tr v-for="(item,i) in GroupB">
              <td>{{i+1}}.</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-12 rounded kare mt-5">
        <div class="text-center bg-primary text-white rounded">Group C</div>
        <table class="table table-striped mt-3">
          <tbody>
            <tr v-for="(item,i) in GroupC">
              <td>{{i+1}}.</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-12 rounded kare mt-5">
        <div class="text-center bg-primary text-white rounded">Group D</div>
        <table class="table table-striped mt-3">
          <tbody>
            <tr v-for="(item,i) in GroupD">
              <td>{{i+1}}.</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-12 rounded kare mt-5">
        <div class="text-center bg-primary text-white rounded">Group E</div>
        <table class="table table-striped mt-3">
          <tbody>
            <tr v-for="(item,i) in GroupE">
           
              <td>{{i+1}}.</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-12 rounded kare mt-5">
        <div class="text-center bg-primary text-white rounded">Group F</div>
        <table class="table table-striped mt-3">
          <tbody>
            <tr v-for="(item,i) in GroupF">
              <td>{{i+1}}.</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
        pool1:[],
        pool2:[],
        pool3:[],
        pool4:[],
       GroupA:[],
       GroupB:[],
       GroupC:[],
       GroupD:[],
       x:6,
       GroupE:[],
       GroupF:[],
       button:true,
       title:true,
       show:false

    };
  },


  methods:{
        pool:function(){
            var vm=this
           var x=6
              for (let id =1; id >0; id--) {
             this.gropus(this.GroupA,6)
              }
              for (let id =1; id >0; id--) {
                 this.gropus(this.GroupB,5)
              }
              for (let id =1; id >0; id--) {
               this.gropus(this.GroupC,4)
              }
              for (let id =1; id >0; id--) {
               this.gropus(this.GroupD,3)
              }
              for (let id =1; id >0; id--) {
               this.gropus(this.GroupE,2)
              } 
               for (let id =1; id >0; id--) {
               
                this.gropus(this.GroupF,1)
               
              }
          
            
          console.log("pool kullanıldı")

         
        },
        repool:function(){
            this.Groups=["Group A", "Group B", "Group C", "Group D","Group E","Group F"]
        this.gruplar=[{ name:"Group A", teams:["ali","veli"]}]
        this.pool1=[]
        this.pool2=[]
        this.pool3=[]
        this.pool4=[]
       this.GroupA=[]
       this.GroupB=[]
       this.GroupC=[]
       this.GroupD=[]
       this.GroupE=[]
       this.GroupF=[]
   
     this.title=true
     console.log("repool kullanıldı"+this.title)
         },
      
     
        gropus:function(value,b){
          
            var deletid= Math.floor(Math.random()*b)
                var deletid2= Math.floor(Math.random()*b)
                var deletid3= Math.floor(Math.random()*b)
                var deletid4= Math.floor(Math.random()*b)
                 value.push(this.pool1[deletid])
                 value.push(this.pool2[deletid2])
                 value.push(this.pool3[deletid3])
                 value.push(this.pool4[deletid4])
                this.delete(this.pool1,this.pool2,this.pool3,this.pool4,deletid,deletid2,deletid3,deletid4)
        },
            delete:function(value,value2,value3,value4,deletid,deletid2,deletid3,deletid4){
            this.$delete(value,deletid)
                  this.$delete(value2,deletid2)
                  this.$delete(value3,deletid3)
                  this.$delete(value4,deletid4)
        },
  }
};
</script>

