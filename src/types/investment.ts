export default interface investmentType{
  _id?: string;
  title: string,
  location: string,
  description: string,
  security_type: string,
  multiple_invest: number,
  profile_img: string,
  min_invest: number,
  get_price: number,
  total_price: number,
  maturity:Date,
  tags:string
}