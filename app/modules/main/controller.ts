module app.main.controller {
	export class TestController {

		public static $inject = [
			'testResource',
			'dateTime'
		];

		greet:string;

		constructor(private $test,
					private dateTime) {
			this.greet = 'spitfire';
		}

		save() {
			this.dateTime.$save();
		}

		save2() {
			this.dateTime = this.$test.save();
		}

	}

	angular
		.module('app.main.controller', [])
		.controller('TestController', TestController);
}