<template>
    <div class="row">
        <div></div>
        <div class="col-12 text-center mt-4" v-if="name"> 
        <button class="btn btn-success" v-if="show" @click="sendtoPool">Kura Çek</button>
      </div>
        <div class="col-12 text-center mt-4">
        <button class="btn btn-warning" v-if="!show"  @click="repool">EURO2020 Takımlarını Ekle</button>
      </div>
      <div class="col-12 border mt-4 table bg-success d-none d-md-inline">
        <span class="text-white">POOL 1</span>
        <span v-for="(item,i) in pool1" class="bg-secondary rounded text-white p-2 mx-3 col-12">
          <strong>{{i+1}}.{{item}}</strong>
        </span>
      </div>
      <div class="col-12 border mt-4 table bg-primary d-none d-md-inline">
        <span class="text-white">POOL 2</span>
        <span v-for="(item,i) in pool2" class="bg-secondary rounded text-white p-2 mx-3">
          <strong>{{i+1}}. {{item}}</strong>
        </span>
      </div>
      <div class="col-12 border mt-4 table bg-danger d-none d-md-inline">
        <span class="text-white">POOL 3</span>
        <span v-for="(item,i) in pool3" class="bg-secondary rounded text-white p-2 mx-3">
          <strong>{{i+1}}. {{item}}</strong>
        </span>
      </div>
      <div class="col-12 border mt-4 table bg-warning d-none d-md-inline">
        <span class="text-white">POOL 4</span>
        <span v-for="(item,i) in pool4" class="bg-secondary rounded text-white p-2 mx-3">
          <strong>{{i+1}}. {{item}}</strong>
        </span>
      </div>

      <div class="d-inline d-md-none">
        <div class="col-12 border mt-4 table">
          <span class="text-dark">POOL 1 Teams/</span>
          <span v-for="(item,i) in pool1" class>
            <strong>{{i+1}}.{{item}}</strong>
          </span>
        </div>
        <div class="col-12 border mt-4 table">
          <span class="text-dark">POOL 2 Teams/</span>
          <span v-for="(item,i) in pool2" class>
            <strong>{{i+1}}. {{item}}</strong>
          </span>
        </div>
        <div class="col-12 border mt-4 table">
          <span class="text-dark">POOL 3 Teams/</span>
          <span v-for="(item,i) in pool3" class>
            <strong>{{i+1}}. {{item}}</strong>
          </span>
        </div>
        <div class="col-12 border mt-4 table">
          <span class="text-dark">POOL 4 Teams /</span>
          <span v-for="(item,i) in pool4" class>
            <strong>{{i+1}}. {{item}}</strong>
          </span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
   data:function(){
       return{
           
          pool1:["Italy","Spain","England","Belguim","Germany","Ukraine"],
        pool2:["France","Holland","Crotia","Switzerland","Russia","Poland",],
        pool3:["Turkey","Portugal","Denmark","Czech Republic","Sweeden","Autralia"],
        pool4:["Finland","Wales","Play-Off 1","Play-Off 2","Play-Off 3","Play-Off 4"],
        show:true,
        create:true
        
         }
   },
     props:["name","shower"],
     methods:{
         sendtoPool(){
          if(this.GroupA!=""){
              this.name=true
          }
           console.log(this.create)
             this.$emit("pool1",this.pool1)
             this.$emit("pool2",this.pool2)
             this.$emit("pool3",this.pool3)
             this.$emit("pool4",this.pool4)
             this.$emit("Pool", "")
this.show=!this.show
   this.name=!this.name

console.log("name Sendtopool"+this.name)
         },
         repool:function(){
            
            this.Groups=["Group A", "Group B", "Group C", "Group D","Group E","Group F"]
        this.gruplar=[{ name:"Group A", teams:["ali","veli"]}]
        this.pool1=["Italy","Spain","England","Belguim","Germany","Ukraine"]
        this.pool2=["France","Holland","Crotia","Switzerland","Russia","Poland",]
        this.pool3=["Turkey","Portugal","Denmark","Czech Republic","Sweeden","Autralia"]
        this.pool4=["Finland","Wales","Play-Off 1","Play-Off 2","Play-Off 3","Play-Off 4"]
       this.GroupA=[]
       this.GroupB=[]
       this.GroupC=[]
       this.GroupD=[]
       this.GroupE=[]
       this.GroupF=[]
        console.log(this.create)
         this.name=!this.name
console.log("name repool"+this.name)
this.show=!this.show
         },
     }
}
</script>