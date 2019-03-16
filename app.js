new Vue({
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
            appStyles: {
                marginTop : '25px'
            },
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
    }
});