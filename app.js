var vm1 = new Vue({
    el:'#app',
    data() {
        return {
            event:{
                eventDate:'August 14th - 16th',
                eventTitle:'Summer Festival!',
                eventDesxription:"It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
                signUpText:'Add your name to the guest list for <em>exclusive</em> offers:'
            },
            newNameText:'',
            guestName: [],
            eventCapacity:25,
            eventCapacityPercentage:0
        }
    },
    methods: {
        formSubmitted: function(){
            if(this.newNameText.length>0 && this.eventCapacityPercentage<100)
            {
                this.guestName.push(this.newNameText);
                this.newNameText='';
                this.formSubmitClass="submitted";
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
            }
        }
    },
    computed: {
        sortName: function(){
            return this.guestName.sort();
        }
    },
    watch: {
        guestName: function(data){
            console.log("watch triggered - guestName");
        }
    },
    filters:{
        formatName: function(value){
            return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
        }
    },
    beforeCreate: function(){
        console.log("before create");
    },
    created: function(){
        console.log("created");
    },
    created: function(){
        console.log("created");
    },
    beforeMount: function(){
        console.log("before mount");
    },
    mounted: function(){
        console.log("mounted");
    },
    beforeUpdate: function(){
        console.log("before update");
    },
    updated: function(){
        console.log("updated");
    },
    beforeDestroy: function(){
        console.log("before destroyed");
    },
    destroyed: function(){
        console.log("destroyed");
    }
});

var vm2 = new Vue({
    el:"#navigation",
    data(){
        return{
            appName:"Guest List", 
            navLinks:[
                {name:'Home',id:1, url:"#"},
                {name:'Upcoming Events',id:2, url:"#"},
                {name:'Guest Benefits',id:3, url:"#"},
                {name:'Latest News',id:4, url:"#"}
            ]
        }
    }
})
