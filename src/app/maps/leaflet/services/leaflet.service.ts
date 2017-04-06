import { Injectable  } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import {Map, MouseEvent, Marker} from "leaflet";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Mark } from '../../../models/mark-model';

@Injectable()
export class LeafletService {
    public map:Map;
   
    public markListURL = 'api/marks';

    constructor(private http: Http){
       
    }

    public getMarkList():Observable<Mark[]>{
        return this.http.get(this.markListURL).map(
            (res:Response) => {
                   let result=res.json().datas.table.row;
                   return result;
         }).catch((error:any) => Observable.throw(error || 'Server error'));
  } 
   
  

    public getMarkInfo(markId:string,isBound:number):Observable<any>{
        let param = { table: { tableName: 'Pub_Query', row: { basNavigationMarkOID: markId } } };
        let url = isBound == 1 ? "http://183.62.26.194:85/markTelemetry/API/MarkManage/markStatusDetail/" + JSON.stringify(param) :  "http://183.62.26.194:85/markTelemetry/API/MarkManage/markDetail/" + JSON.stringify(param);
        return this.http.get(url).map(
            
            (res:Response)=>{
                console.log(222);
                return res.json().datas.table.row;
            }
        ).catch((error:any) => Observable.throw(error || 'Server error'));

    }

   

    public addMark(latlng:any):any{
        let myIcon = L.icon({
			iconUrl: 'assets/mark/select.png',
			iconAnchor: [16, 32]
		});
		let marker = L.marker(latlng, { icon: myIcon });
        return marker;
    }
      public getImg(type:string):any{
        let url, iconAnchor, popupAnchor;
        switch(type) {
                case '0101':
                    url = 'assets/mark/灯塔.png';
                    iconAnchor = [4, 24];
                    popupAnchor = [0, -24];
                    break;
                case '0102':
                    url = 'assets/mark/灯桩.png';
                    iconAnchor = [6, 24];
                    popupAnchor = [0, -24];
                    break;
                case '0105':
                    url = 'assets/mark/灯船.png';
                    iconAnchor = [8, 16];
                    popupAnchor = [0, -16];
                    break;
                case '11':
                    url = 'assets/mark/航道左侧标.png';
                    iconAnchor = [7, 29];
                    popupAnchor = [0, -29];
                    break;
                case '12':
                    url = 'assets/mark/航道右侧标.png';
                    iconAnchor = [7, 29];
                    popupAnchor = [0, -29];
                    break;
                case '13':
                    url = 'assets/mark/推荐航道左侧标.png';
                    iconAnchor = [7, 29];
                    popupAnchor = [0, -29];
                    break;
                case '14':
                    url = 'assets/mark/推荐航道右侧标.png';
                    iconAnchor = [7, 29];
                    popupAnchor = [0, -29];
                    break;
                case '21':
                    url = 'assets/mark/东方位标.png';
                    iconAnchor = [7, 38];
                    popupAnchor = [0, -38];
                    break;
                case '22':
                    url = 'assets/mark/西方位标.png';
                    iconAnchor = [7, 39];
                    popupAnchor = [0, -39];
                    break;
                case '23':
                    url = 'assets/mark/南方位标.png';
                    iconAnchor = [7, 38];
                    popupAnchor = [0, -38];
                    break;
                case '24':
                    url = 'assets/mark/北方位标.png';
                    iconAnchor = [7, 38];
                    popupAnchor = [0, -38];
                    break;
                case "31": // 孤立危险物标
                    url = 'assets/mark/孤立危险物标.png';
                    iconAnchor = [8, 40];
                    popupAnchor = [0, -40];
                    break;
                case "41": // 安全水域标
                    url = 'assets/mark/安全水域标.png';
                    iconAnchor = [8, 34];
                    popupAnchor = [0, -34];
                    break;
                case "51": // 应急沉船标志
                    url = 'assets/mark/应急沉船示位标.png';
                    iconAnchor = [11, 34];
                    popupAnchor = [0, -34];
                    break;
                case "61": // 专用标志-锚地
                    url = 'assets/mark/锚地.png';
                    iconAnchor = [9, 24]
                    break;
                case "62": // 专用标志-禁航区
                    url = 'assets/mark/禁航区.png';
                    iconAnchor = [12, 23];
                    popupAnchor = [0, -23];
                    break;
                case "63": // 专用标志-海上作业区
                    url = 'assets/mark/海上作业区.png';
                    iconAnchor = [12, 17];
                    popupAnchor = [0, -17];
                    break;
                case "64": // 专用标志-分道通航
                    url = 'assets/mark/分道通航.png';
                    iconAnchor = [15, 17];
                    popupAnchor = [0, -17];
                    break;
                case "65": // 专用标志-水中构筑物
                    url = 'assets/mark/水中构筑物.png';
                    iconAnchor = [12, 21];
                    popupAnchor = [0, -21];
                    break;
                case "66": // 专用标志-娱乐区
                    url = 'assets/mark/娱乐区.png';
                    iconAnchor = [15, 14];
                    popupAnchor = [0, -14];
                    break;
                case "67": // 专用标志-水产作业区
                    url = 'assets/mark/水产作业区.png';
                    iconAnchor = [15, 13];
                    popupAnchor = [0, -13];
                    break;
                case "68": // 专用标志-横越航道区
                    url = 'assets/mark/横越区.png';
                    iconAnchor = [15, 17];
                    popupAnchor = [0, -17];
                    break;
                default:
                    url = 'assets/mark/其他.png';
                    iconAnchor = [12, 24];
                    popupAnchor = [0, -24];
                    break;
            }
        return L.icon({
                iconUrl: url,
                        iconAnchor: iconAnchor,
                        popupAnchor: popupAnchor
                })
        
    }
}