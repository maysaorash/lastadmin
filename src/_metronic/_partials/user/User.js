
import React from "react";

export function User({ className }) {
 

  return (
    <>
    <div className="container">
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">User Lists</h3>
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
                    User
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
