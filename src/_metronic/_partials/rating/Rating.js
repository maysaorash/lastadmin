// // /* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
// // import React, {useMemo, useState} from "react";
// // import {Formik} from "formik";
// // import {get, merge} from "lodash";
// // import {FormHelperText, Switch} from "@material-ui/core";
// // import clsx from "clsx";
// // // https://github.com/conorhastings/react-syntax-highlighter#prism
// // import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
// // // See https://github.com/PrismJS/prism-themes
// // import {coy as highlightStyle} from "react-syntax-highlighter/dist/esm/styles/prism";
// // import {useHtmlClassService, setLayoutConfig, getInitLayoutConfig} from "../../layout";
// // import {Card, CardBody, CardHeader, Notice} from "../controls";

// // const localStorageActiveTabKey = "builderActiveTab";

// // export function Rating() {
// //     const activeTab = localStorage.getItem(localStorageActiveTabKey);
// //     const [key, setKey] = useState(activeTab ? +activeTab : 0);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const htmlClassService = useHtmlClassService();
// //     const initialValues = useMemo(
// //         () =>
// //             merge(
// //                 // Fulfill changeable fields.
// //                 getInitLayoutConfig(),
// //                 htmlClassService.config
// //             ),
// //         [htmlClassService.config]
// //     );

// //     const saveCurrentTab = (_tab) => {
// //         localStorage.setItem(localStorageActiveTabKey, _tab);
// //     }

// //     return (
// //         <>
// //             <Notice svg="/media/svg/icons/Tools/Compass.svg">
// //                 <p>
// //                     The layout builder is to assist your set and configure your preferred project layout specifications
// //                     and preview it in real time.
// //                     The configured layout options will be saved until you change or reset them.
// //                     To use the layout builder, choose the layout options and click the <code>Preview</code> button to
// //                     preview the changes.
// //                 </p>
// //             </Notice>
// //             {/*Formic off site: https://jaredpalmer.com/formik/docs/overview*/}
// //             <Formik
// //                 initialValues={initialValues}
// //                 onSubmit={values => {
// //                     setIsLoading(true);
// //                     setLayoutConfig(values);
// //                 }}
// //                 onReset={() => {
// //                     setIsLoading(true);
// //                     setLayoutConfig(getInitLayoutConfig());
// //                 }}
// //             >
// //                 {({values, handleReset, handleSubmit, handleChange, handleBlur}) => (
// //                     <>
// //                         <div className="card card-custom">
// //                             {/*Header*/}
// //                             <div className="card-header card-header-tabs-line">
// //                                 <ul
// //                                     className="nav nav-dark nav-bold nav-tabs nav-tabs-line"
// //                                     data-remember-tab="tab_id"
// //                                     role="tablist"
// //                                 >
// //                                     <li className="nav-item">
// //                                         <a
// //                                             className={`nav-link ${key === 0 ? "active" : ""}`}
// //                                             data-toggle="tab"
// //                                             onClick={() => {
// //                                                 setKey(0);
// //                                                 saveCurrentTab(0);
// //                                             }}
// //                                         >
// //                                             Header
// //                                         </a>
// //                                     </li>
// //                                     <li className="nav-item">
// //                                         <a
// //                                             className={`nav-link ${key === 1 ? "active" : ""}`}
// //                                             data-toggle="tab"
// //                                             onClick={() => {
// //                                                 setKey(1);
// //                                                 saveCurrentTab(1);
// //                                             }}
// //                                         >
// //                                             Subheader
// //                                         </a>
// //                                     </li>
// //                                     <li className="nav-item">
// //                                         <a
// //                                             className={`nav-link ${key === 2 ? "active" : ""}`}
// //                                             data-toggle="tab"
// //                                             onClick={() => {
// //                                                 setKey(2);
// //                                                 saveCurrentTab(2);
// //                                             }}
// //                                         >
// //                                             Content
// //                                         </a>
// //                                     </li>
// //                                     <li className="nav-item">
// //                                         <a
// //                                             className={`nav-link ${key === 3 ? "active" : ""}`}
// //                                             data-toggle="tab"
// //                                             onClick={() => {
// //                                                 setKey(3);
// //                                                 saveCurrentTab(3);
// //                                             }}
// //                                         >
// //                                             Aside
// //                                         </a>
// //                                     </li>
// //                                     <li className="nav-item">
// //                                         <a
// //                                             className={`nav-link ${key === 4 ? "active" : ""}`}
// //                                             data-toggle="tab"
// //                                             onClick={() => {
// //                                                 setKey(4);
// //                                                 saveCurrentTab(4);
// //                                             }}
// //                                         >
// //                                             Footer
// //                                         </a>
// //                                     </li>
// //                                 </ul>
// //                             </div>

// //                             <div className="form">
// //                                 <div className="card-body">
// //                                     <div className="tab-content pt-3">
// //                                         <div className={`tab-pane ${key === 0 ? "active" : ""}`}>
// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Desktop Fixed Header:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="header.self.fixed.desktop"
// //                                                         checked={!!get(values, "header.self.fixed.desktop")}
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Enable fixed header for mobile mode
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Mobile Fixed Header:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="header.self.fixed.mobile"
// //                                                         checked={!!get(values, "header.self.fixed.mobile")}
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Enable fixed header for mobile mode
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Header Width:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <select
// //                                                         className="form-control form-control-solid"
// //                                                         name="header.self.width"
// //                                                         onBlur={handleBlur}
// //                                                         value={get(values, "header.self.width")}
// //                                                         onChange={handleChange}
// //                                                     >
// //                                                         <option value="fluid">Fluid</option>
// //                                                         <option value="fixed">Fixed</option>
// //                                                     </select>
// //                                                     <FormHelperText>
// //                                                         Select header width type
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Display Header Menu:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="header.menu.self.display"
// //                                                         checked={!!get(values, "header.menu.self.display")}
// //                                                     />
// //                                                     <FormHelperText>Display header menu</FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Header Menu Layout:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <select
// //                                                         className="form-control"
// //                                                         name="header.menu.self.layout"
// //                                                         onBlur={handleBlur}
// //                                                         value={get(values, "header.menu.self.layout")}
// //                                                         onChange={handleChange}
// //                                                     >
// //                                                         <option value="default">Default</option>
// //                                                         <option value="tab">Tab</option>
// //                                                     </select>
// //                                                     <FormHelperText>
// //                                                         Select header menu layout style
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Header Menu Arrows:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="header.menu.self.root-arrow"
// //                                                         checked={
// //                                                             !!get(values, "header.menu.self.root-arrow")
// //                                                         }
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Enable header menu root link arrows
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                         <div className={`tab-pane ${key === 1 ? "active" : ""}`}>
// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Display Subheader:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="subheader.display"
// //                                                         checked={!!get(values, "subheader.display")}
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Display subheader
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Fixed Subheader:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="subheader.fixed"
// //                                                         checked={!!get(values, "subheader.fixed")}
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Enable fixed(sticky) subheader. Requires{" "}
// //                                                         <code>Solid</code> subheader style.
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Width:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <select
// //                                                         className="form-control"
// //                                                         name="subheader.width"
// //                                                         onBlur={handleBlur}
// //                                                         value={get(values, "subheader.width")}
// //                                                         onChange={handleChange}
// //                                                     >
// //                                                         <option value="fluid">Fluid</option>
// //                                                         <option value="fixed">Fixed</option>
// //                                                     </select>
// //                                                     <FormHelperText>
// //                                                         Select layout width type
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Subheader Style:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <select
// //                                                         className="form-control"
// //                                                         name="subheader.style"
// //                                                         onBlur={handleBlur}
// //                                                         value={get(values, "subheader.style")}
// //                                                         onChange={handleChange}
// //                                                     >
// //                                                         <option value="transparent">Transparent</option>
// //                                                         <option value="solid">Solid</option>
// //                                                     </select>
// //                                                     <FormHelperText>
// //                                                         Select subheader style
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                         </div>
// //                                         <div className={`tab-pane ${key === 2 ? "active" : ""}`}>
// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Width:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <select
// //                                                         className="form-control"
// //                                                         name="content.width"
// //                                                         onBlur={handleBlur}
// //                                                         value={get(values, "content.width")}
// //                                                         onChange={handleChange}
// //                                                     >
// //                                                         <option value="fluid">Fluid</option>
// //                                                         <option value="fixed">Fixed</option>
// //                                                     </select>
// //                                                     <FormHelperText>
// //                                                         Select layout width type
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                         <div className={`tab-pane ${key === 3 ? "active" : ""}`}>
// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Display:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="aside.self.display"
// //                                                         checked={!!get(values, "aside.self.display")}
// //                                                     />
// //                                                     <FormHelperText>Display aside</FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Fixed:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="aside.self.fixed"
// //                                                         checked={!!get(values, "aside.self.fixed")}
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Set fixed aside layout
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Minimize:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="aside.self.minimize.toggle"
// //                                                         checked={
// //                                                             !!get(values, "aside.self.minimize.toggle")
// //                                                         }
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Allow aside minimizing
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Hoverable:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="aside.self.minimize.hoverable"
// //                                                         checked={
// //                                                             !!get(values, "aside.self.minimize.hoverable")
// //                                                         }
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Expand Minimized Aside on hover
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Default Minimize:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="aside.self.minimize.default"
// //                                                         checked={
// //                                                             !!get(values, "aside.self.minimize.default")
// //                                                         }
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Set aside minimized by default
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label
// //                                                     className="col-lg-3 col-form-label pt-4 text-lg-right">
// //                                                     Submenu Toggle:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="aside.menu.dropdown"
// //                                                         checked={!!get(values, "aside.menu.dropdown")}
// //                                                     />
// //                                                     <FormHelperText>
// //                                                         Select submenu toggle mode (works only when{" "}
// //                                                         <code>Fixed Mode</code> is disabled)
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                         </div>
// //                                         <div className={`tab-pane ${key === 4 ? "active" : ""}`}>
// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Fixed Desktop Footer:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <Switch
// //                                                         onBlur={handleBlur}
// //                                                         onChange={handleChange}
// //                                                         name="footer.fixed"
// //                                                         checked={!!get(values, "footer.fixed")}
// //                                                     />

// //                                                     <FormHelperText>Set fixed desktop footer</FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                             <div className="form-group row">
// //                                                 <label className="col-lg-3 col-form-label text-lg-right">
// //                                                     Width:
// //                                                 </label>
// //                                                 <div className="col-lg-9 col-xl-4">
// //                                                     <select
// //                                                         className="form-control form-control-solid"
// //                                                         name="footer.self.width"
// //                                                         onBlur={handleBlur}
// //                                                         value={get(values, "footer.self.width")}
// //                                                         onChange={handleChange}
// //                                                     >
// //                                                         <option value="fluid">Fluid</option>
// //                                                         <option value="fixed">Fixed</option>
// //                                                     </select>
// //                                                     <FormHelperText>
// //                                                         Select layout width type
// //                                                     </FormHelperText>
// //                                                 </div>
// //                                             </div>

// //                                         </div>
// //                                     </div>
// //                                 </div>

// //                                 <div className="card-footer">
// //                                     <div className="row">
// //                                         <div className="col-lg-3"></div>
// //                                         <div className="col-lg-9">
// //                                             <button
// //                                                 type="button"
// //                                                 onClick={handleSubmit}
// //                                                 className={`btn btn-primary font-weight-bold mr-2`}
// //                                             >
// //                                                 <i className="fa fa-eye"/> Preview
// //                                             </button>
// //                                             {" "}
// //                                             <button
// //                                                 type="button"
// //                                                 onClick={handleReset}
// //                                                 className={`btn btn-clean font-weight-bold mr-2`}
// //                                             >
// //                                                 <i className="fa fa-recycle"/> Reset
// //                                             </button>
// //                                             {" "}
// //                                             <span
// //                                                 className={`ml-3 ${clsx({
// //                                                     spinner: isLoading
// //                                                 })}`}
// //                                             />
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/*Config*/}
// //                         <Card className="mt-4">
// //                             <CardHeader
// //                                 title={
// //                                     <>
// //                                         Generated Config{" "}
// //                                         <small>
// //                                             can be used for layout config in{" "}
// //                                             <code>/src/_metronic/layout/LayoutConfig.js</code>
// //                                         </small>
// //                                     </>
// //                                 }
// //                             />

// //                             <CardBody>
// //                                 <SyntaxHighlighter
// //                                     language="json"
// //                                     style={highlightStyle}
// //                                     customStyle={{
// //                                         background: `none transparent !important`
// //                                     }}
// //                                 >
// //                                     {JSON.stringify(values, null, 2)}
// //                                 </SyntaxHighlighter>
// //                             </CardBody>
// //                         </Card>
// //                     </>
// //                 )}
// //             </Formik>
// //         </>
// //     );
// // }


// // // import customerTableMock from "../../../app/modules/ECommerce/__mocks__/customerTableMock";
// // // import MockUtils from "../../.././app/modules/ECommerce/__mocks__/mock.utils";

// // // export function Rating(mock) {
// // //   mock.onPost("/rating").reply(({ data }) => {
// // //     const { rating } = JSON.parse(data);
// // //     const {
// // //       firstName = "",
// // //       lastName = "",
// // //       email = "",
// // //       userName = "",
// // //       gender = "Female",
// // //       status = 0,
// // //       dateOfBbirth = "01/01/2019",
// // //       ipAddress = "127.0.0.1",
// // //       type = 1
// // //     } = rating;

// // //     const id = generateUserId();
// // //     const newCustomer = {
// // //       id,
// // //       firstName,
// // //       lastName,
// // //       email,
// // //       userName,
// // //       gender,
// // //       status,
// // //       dateOfBbirth,
// // //       ipAddress,
// // //       type
// // //     };
// // //     customerTableMock.push(newCustomer);
// // //     return [200, { customer: newCustomer }];
// // //   });

// // //   mock.onPost("api/customers/find").reply(config => {
// // //     const mockUtils = new MockUtils();
// // //     const { queryParams } = JSON.parse(config.data);
// // //     const filterdCustomers = mockUtils.baseFilter(
// // //       customerTableMock,
// // //       queryParams
// // //     );
// // //     return [200, filterdCustomers];
// // //   });

// // //   mock.onPost("api/customers/deleteCustomers").reply(config => {
// // //     const { ids } = JSON.parse(config.data);
// // //     ids.forEach(id => {
// // //       const index = customerTableMock.findIndex(el => el.id === id);
// // //       if (index > -1) {
// // //         customerTableMock.splice(index, 1);
// // //       }
// // //     });
// // //     return [200];
// // //   });

// // //   mock.onPost("api/customers/updateStatusForCustomers").reply(config => {
// // //     const { ids, status } = JSON.parse(config.data);
// // //     customerTableMock.forEach(el => {
// // //       if (ids.findIndex(id => id === el.id) > -1) {
// // //         el.status = status;
// // //       }
// // //     });
// // //     return [200];
// // //   });

// // //   mock.onGet(/api\/customers\/\d+/).reply(config => {
// // //     const id = config.url.match(/api\/customers\/(\d+)/)[1];
// // //     const customer = customerTableMock.find(el => el.id === +id);
// // //     if (!customer) {
// // //       return [400];
// // //     }

// // //     return [200, customer];
// // //   });

// // //   mock.onPut(/api\/customers\/\d+/).reply(config => {
// // //     const id = config.url.match(/api\/customers\/(\d+)/)[1];
// // //     const { customer } = JSON.parse(config.data);
// // //     const index = customerTableMock.findIndex(el => el.id === +id);
// // //     if (!index) {
// // //       return [400];
// // //     }

// // //     customerTableMock[index] = { ...customer };
// // //     return [200];
// // //   });

// // //   mock.onDelete(/api\/customers\/\d+/).reply(config => {
// // //     const id = config.url.match(/api\/customers\/(\d+)/)[1];
// // //     const index = customerTableMock.findIndex(el => el.id === +id);
// // //     customerTableMock.splice(index, 1);
// // //     if (!index === -1) {
// // //       return [400];
// // //     }

// // //     return [200];
// // //   });
// // // }

// // // function generateUserId() {
// // //   const ids = customerTableMock.map(el => el.id);
// // //   const maxId = Math.max(...ids);
// // //   return maxId + 1;
// // // }


// import React from 'react';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

// function createData(name, category, fat, carbs, protein) {
//   return { name, category, fat, carbs, protein };
// }

// const rows = [
//     createData(1, "Movie", 6.0, 24, 4.0),
//   createData(2, "Show", 3.7, 67, 4.3),
//   createData(3, "Movie", 25.0, 51, 4.9),
//   createData(4, "Movie", 16.0, 24, 6.0),
//   createData(5, "Show", 16.0, 49, 3.9),
// //   createData('Honeycomb', 408, 3.2, 87, 6.5),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
// //   createData('KitKat', 518, 26.0, 65, 7.0),
// //   createData('Lollipop', 392, 0.2, 98, 0.0),
// //   createData('Marshmallow', 318, 0, 81, 2.0),
// //   createData('Nougat', 360, 19.0, 9, 37.0),
// //   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function desc(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function stableSort(array, cmp) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//   return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
// }

// const headRows = [
//   { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
//   { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
//   { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
//   { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
//   { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = property => event => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'Select all desserts' }}
//           />
//         </TableCell>
//         {headRows.map(row => (
//           <TableCell
//             key={row.id}
//             align={row.numeric ? 'right' : 'left'}
//             padding={row.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === row.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === row.id}
//               direction={order}
//               onClick={createSortHandler(row.id)}
//             >
//               {row.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.string.isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles(theme => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// }));

// const EnhancedTableToolbar = props => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       <div className={classes.title}>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Rating Lists
//           </Typography>
//         )}
//       </div>
//       <div className={classes.spacer} />
//       <div className={classes.actions}>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableWrapper: {
//     overflowX: 'auto',
//   },
// }));

// export function Rating() {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('category');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   function handleRequestSort(event, property) {
//     const isDesc = orderBy === property && order === 'desc';
//     setOrder(isDesc ? 'asc' : 'desc');
//     setOrderBy(property);
//   }

//   function handleSelectAllClick(event) {
//     if (event.target.checked) {
//       const newSelecteds = rows.map(n => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   }

//   function handleClick(event, name) {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   }

//   function handleChangePage(event, newPage) {
//     setPage(newPage);
//   }

//   function handleChangeRowsPerPage(event) {
//     setRowsPerPage(+event.target.value);
//   }

//   function handleChangeDense(event) {
//     setDense(event.target.checked);
//   }

//   const isSelected = name => selected.indexOf(name) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <div className={classes.tableWrapper}>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getSorting(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={event => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ 'aria-labelledby': labelId }}
//                         />
//                       </TableCell>
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.category}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.protein}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 49 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           backIconButtonProps={{
//             'aria-label': 'Previous Page',
//           }}
//           nextIconButtonProps={{
//             'aria-label': 'Next Page',
//           }}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </div>
//   );
// }



import React from "react";

export function Rating({ className }) {
 

  return (
    <>
    <div className="container">
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Rating Lists</h3>
          </div>
          <div className="card-toolbar">
            {/* <button type="button" className="btn btn-primary">
              New Customer
            </button> */}
          </div>
        </div>
        <div className="card-body">
          <form className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Status"
                >
                  <option value>All</option>
                  <option value={0}>Suspended</option>
                  <option value={1}>Active</option>
                  <option value={2}>Pending</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  placeholder="Filter by Type"
                  name="type"
                >
                  <option value>All</option>
                  <option value={0}>Business</option>
                  <option value={1}>Individual</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Type
                </small>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                  defaultValue
                />
                <small className="form-text text-muted">
                  <b>Search</b> in all fields
                </small>
              </div>
            </div>
          </form>
          <div className="react-bootstrap-table table-responsive">
            <table className="table table table-head-custom table-vertical-center overflow-hidden">
              <thead>
                <tr>
                  <th
                    className="selection-cell-header"
                    data-row-selection="true"
                  >
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="ID sort asc"
                    className="sortable sortable-active"
                  >
                    ID
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Navigation / Up-2</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Navigation-/-Up-2"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                          <rect
                            id="Rectangle"
                            fill="#000000"
                            opacity="0.3"
                            x={11}
                            y={10}
                            width={2}
                            height={10}
                            rx={1}
                          />
                          <path
                            d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                            id="Path-94"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Firstname sortable"
                    className="sortable"
                  >
                    Category
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Lastname sortable"
                    className="sortable"
                  >
                    Name
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Email sortable"
                    className="sortable"
                  >
                    Description
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th tabIndex={0}>Release Date</th>
                  <th
                    tabIndex={0}
                    aria-label="Status sortable"
                    className="sortable"
                  >
                    Status
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Type sortable"
                    className="sortable"
                  >
                    Rating
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th tabIndex={0} className="text-right pr-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>1</td>
                  <td>Sonni</td>
                  <td>Gabotti</td>
                  <td>sgabotti0@wsj.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-danger label-inline">
                      Suspended
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>2</td>
                  <td>Abie</td>
                  <td>Cowperthwaite</td>
                  <td>acowperthwaite1@storify.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>3</td>
                  <td>Melody</td>
                  <td>Stodd</td>
                  <td>mstodd2@twitpic.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-danger label-inline">
                      Suspended
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>4</td>
                  <td>Naomi</td>
                  <td>Galbreth</td>
                  <td>ngalbreth3@springer.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-info label-inline">
                      Pending
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>5</td>
                  <td>Ashley</td>
                  <td>Jandl</td>
                  <td>ajandl4@mapy.cz</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>6</td>
                  <td>Mildrid</td>
                  <td>Duplan</td>
                  <td>mduplan5@msn.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>7</td>
                  <td>Dall</td>
                  <td>Stow</td>
                  <td>dstow6@vistaprint.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-info label-inline">
                      Pending
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>8</td>
                  <td>Burton</td>
                  <td>Dering</td>
                  <td>bdering7@europa.eu</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>9</td>
                  <td>Wolf</td>
                  <td>Blackaller</td>
                  <td>wblackaller8@biblegateway.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-danger label-inline">
                      Suspended
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>10</td>
                  <td>Adham</td>
                  <td>Hurtic</td>
                  <td>ahurtic9@friendfeed.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex flex-wrap py-2 mr-3 ">
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-double-arrow-back icon-xs" />
              </a>
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-arrow-back icon-xs" />
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  btn-hover-primary active mr-2 my-1">
                1
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                2
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                3
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                4
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                5
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">
                ...
              </a>
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-arrow-next icon-xs" />
              </a>
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-double-arrow-next icon-xs" />
              </a>
            </div>
            <div className="d-flex align-items-center py-3">
              <select
                className="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light false"
                style={{ width: 75 }}
              >
                <option className="btn ">3</option>
                <option className="btn ">5</option>
                <option className="btn ">10</option>
              </select>
              <span className="react-bootstrap-table-pagination-total">
                &nbsp;Showing rows 1 to&nbsp;10 of&nbsp;100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
