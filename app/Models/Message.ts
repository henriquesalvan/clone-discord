import {BaseModel, BelongsTo, belongsTo, column,} from "@ioc:Adonis/Lucid/Orm";
import User                                       from "App/Models/User";
import {DateTime}                                 from "luxon";

export default class Message extends BaseModel {

    @column({isPrimary: true})
    public id: number;

    @column()
    public message: string;

    @column.dateTime({autoCreate: true})
    public createdAt: DateTime;

    @column.dateTime({autoCreate: true, autoUpdate: true})
    public updatedAt: DateTime;

    @column()
    public userId: number;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;

}
