import { BehaviorSubject, Observable } from "rxjs";
import { GiftListItemCreate, GiftListItemModel } from "src/app/models";

export class GiftDataService{
  private currentId = 4;
  private _subject: BehaviorSubject<GiftListItemModel[]>;
  private _data: GiftListItemModel[] = [
    { id: '1', description: 'Beer', for: 'Jeff', due: '2021-12-15', purchased: false },
    { id: '2', description: 'XBox Crap', for: 'Henry', due: '2021-12-24', purchased: false },
    { id: '3', description: 'Horror Makeup', for: 'Violet', due: '2021-12-24', purchased: true },
    ];
  constructor(){
    // Would go to API, but we're faking it
    this._subject = new BehaviorSubject<GiftListItemModel[]>(this._data);
  }

  getData(): Observable<GiftListItemModel[]> {
    return this._subject.asObservable();
  }

  addData(item: GiftListItemCreate): void {
    const itemToAdd = {
    ...item,
    id: (this.currentId++).toString(),
    purchased: false
    } as GiftListItemModel;
    // add it to the cache I have here.
    this._data = [itemToAdd, ...this._data];
    this._subject.next(this._data);
    }
}
