import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useParams } from "react-router-dom";
import { MdExposurePlus1 } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { getMembers, deleteMem } from "./Axios";
export default function Myfamily() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    getMembers().then((response) => {
      setData(response.response.data.data);
    });
  }, []);

  const deleteMember = async (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMem(id);
        Swal.fire("Member deleted");
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire("Deletion canceled");
      }
    });
  };

  return (
    <>
      <div className="family">
        <Sidebar />
        <div className="familybody">
          <div className="familyheader">
            <h1>Details of Family</h1>
          </div>
          <div className="familysubhead">
            <h1>Members</h1>
            <h1>
              <Link
                to="/Addmember"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MdExposurePlus1 />
                Add Member
              </Link>
            </h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Name</th>
                <th scope="col">Relationship</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index }</th>
                    <td>{data[index].attributes.memberName}</td>
                    <td>{data[index].attributes.Relationship}</td>
                    <td>
                      <Link
                        to={`/Updatemember/${item.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <GrDocumentUpdate />
                        Update
                      </Link>
                      <button
                        onClick={() => {
                          deleteMember(item.id);
                        }}
                        style={{
                          border: "none",
                          backgroundColor: "rgba (0,0,0,0)",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
