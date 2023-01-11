import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;
const benhnhanSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    mabncu: {
      type: String,
    },
    hoten: {
      type: String,
      required: true,
    },
    ngaysinh: {
      type: Date,
    },
    maphai: {
      type: Number,
      // ref: 'DmPhai',
    },
    madantoc: {
      type: Number,
      // ref: 'DmDanToc',
    },
    maquoctich: {
      type: Number,
      // ref: 'DmQuocTich',
    },
    manghenghiep: {
      type: Number,
      // ref: 'DmNgheNghiep',
    },
    sonha: { type: String },
    thonpho: { type: String },
    mapx: {
      type: Number,
      // ref: 'DmPhuongXa',
    },
    maqh: {
      type: Number,
      // ref: 'DmQuanHuyen',
    },
    matt: {
      type: Number,
      // ref: 'DmTinhThanh',
    },
    dienthoai: { type: String, required: true },
    email: { type: String },

    taikhoan: {
      type: String,
      required: true,
    },
    matkhau: {
      type: String,
      required: true,
    },
    is_deleted: { type: Boolean, default: false },
    device_tokens: [],
    xacthucdienthoai: { type: Boolean, default: false },
    taikhoanhis: { type: Boolean, default: false },
    quanlythaighen: { type: Boolean, default: false },
    thutinhongnghiem: { type: Boolean, default: false },
    lanmangthai: { type: Number },
    ngaydukiensinh: { type: Date },
    ngaymangthai: { type: Date },
    socmnd: { type: String },
    ngaycapcmnd: { type: Date },
    noicapcmnd: { type: String },
    noilamviec: { type: String },
    cccd: { type: Boolean, default: false },
    bhyt: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    collection: 'benhnhan',
  }
);
benhnhanSchema.plugin(mongoosePaginate);
const BenhNhan = mongoose.model('BenhNhan', benhnhanSchema);
export default BenhNhan;
