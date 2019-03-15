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
            formSubmitClass: "",
            appStyles: {
                marginTop : '25px'
            }
        }
    },
    methods: {
        formSubmitted: function(){
            if(this.newNameText.length>0)
            {
                this.guestName.push(this.newNameText);
                this.newNameText='';
                this.formSubmitClass="submitted"
            }
        }
    }
});