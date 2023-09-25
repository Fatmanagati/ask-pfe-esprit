export class UserStored {
    constructor(public username : string ,
       public id : string,
        public role : string,
        public _token : string ,
        private _tokenExpirationDate : Date

        ){
            // this.userName = userName
            // this._token = _token
            // this._tokenExpirationDate = _tokenExpirationDate
        }


        get token () {
            if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
                return null;
            }
            return this._token
        }
}