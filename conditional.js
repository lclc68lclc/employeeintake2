$(document).ready(function() {
		//Inputs that determine what fields to show
		var position = $('#employee input:radio[name=billable]');
		
		//Wrappers for all fields
		var employeename = $('#employee p[name=employeename]');
		var preferredname=$('#employee p[name=preferredname]');	
		var forlocation=$('#employee p[name=location]');
		var startdate=$('#employee input:text[name=startdate]');
		var enddate=$('#employee input:text[name=enddate]');
		var billable = $('#employee #billGrp');
		var nonbillable = $('#employee #nonbGrp');
		var billingrate = $('#employee #billingRte');
		var retainerrate = $('#employee #retainerRte');
		var practicegroup = $('#employee #practiceGrp');
		var attorneyassignment = $('#employee #attyAssign');
		var attorneyassistant = $('#employee #attyAssist');
		var staffJobtitle = $('#employee #newPosition');
		var computertype = $('#employee #computer');
		var notes = $('#employee #note');
		var comments = $('#employee #comments');
		var email_group  = $('#employee #emailgroups');
		var submitBtns = $('#employee #subBtns');
		var all=enddate.add(billable).add(billingrate).add(retainerrate).add(nonbillable).add(practicegroup).add(attorneyassignment).add(attorneyassistant).add(staffJobtitle).add(computertype).add(computertype).add(notes).add(comments).add(email_group).add(submitBtns);
				
		position.change(function(){
			var value=this.value;						
			all.addClass('hidden'); //hide everything and reveal as needed
			
			if (value === 'Billable'){
				billable.removeClass('hidden');
				billingrate.removeClass('hidden');
				retainerrate.removeClass('hidden');
				practicegroup.removeClass('hidden');
				attorneyassistant.removeClass('hidden');
				computertype.removeClass('hidden');
				notes.removeClass('hidden');
				comments.removeClass('hidden');
				email_group.removeClass('hidden');
				submitBtns.removeClass('hidden');
			}
			else if (value === 'Non-Billable'){
				nonbillable.removeClass('hidden');
				attorneyassignment.removeClass('hidden');
				staffJobtitle.removeClass('hidden');
				computertype.removeClass('hidden');
				notes.removeClass('hidden');
				comments.removeClass('hidden');
				submitBtns.removeClass('hidden');
			}		
		});	

});
