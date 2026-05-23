import React from "react";

const AboutUs = () => {
  // Array holding all team members. 
  // You only need to edit this list to add/remove people or change roles!
  const teamMembers = [
    { name: "Oluwasheyi Olayemi Ojelade", role: "Principal Cloud Architect", firstName: "Oluwasheyi" },
    { name: "Shaka-Jimoh Musharraf", role: "Technical Architecture Designer", firstName: "Shaka-Jimoh" },
    { name: "Dennis Sunday Chimezie", role: "Pod Operations Assistant", firstName: "Dennis" },
    { name: "Akachukwu Albright Osunkwo", role: "Cloud Engineer Contributor", firstName: "Akachukwu" },
    { name: "Peace Odichinma Ekebuisi-Dennar", role: "Workspace Operations & Agile Administrator", firstName: "Peace" },
    { name: "Favour Chinyere Amanwo", role: "Communications Coordinator", firstName: "Favour" },
    { name: "Gloria Globetty Omeagu", role: "Technical Documentation Co-Lead", firstName: "Gloria" },
    { name: "Oguntimehin Oluwakemi", role: "Cloud Engineer Contributor", firstName: "Oguntimehin" },
    { name: "Loveth Obiageli Ugwu", role: "Cloud Engineer Contributor", firstName: "Loveth" },
    { name: "Orji Ruth Ezinne", role: "Cloud Engineer Contributor", firstName: "Orji" },
    { name: "Amaobi Chijindu Mark", role: "Cloud Engineer Contributor", firstName: "Amaobi" },
    { name: "Temilade Mercy Adeniji", role: "Cloud Engineer Contributor", firstName: "Temilade" },
    { name: "Victor Olatunji", role: "Cloud Engineer Contributor", firstName: "Victor" },
    { name: "Alisigwe Chiamara Miracle", role: "Cloud Engineer Contributor", firstName: "Alisigwe" },
    { name: "Okoro Ndidi Edith", role: "Cloud Engineer Contributor", firstName: "Okoro" },
    { name: "Ikaba Michael", role: "Cloud Engineer Contributor", firstName: "Ikaba" },
    { name: "Ditonipre Joan Benwari", role: "Cloud Engineer Contributor", firstName: "Ditonipre" },
    { name: "Paul Stephen Yahi", role: "Cloud Engineer Contributor", firstName: "Paul" },
    { name: "Chidinma Victoria Wehere", role: "Pod Project Manager", firstName: "Chidinma" },
    { name: "Olori Oghenerukevwe O.", role: "Cloud Engineer Contributor", firstName: "Olori" },
    { name: "Nwankwo Stella Ukamaka", role: "Cloud Networking Specialist, Ingress", firstName: "Nwankwo" },
    { name: "Ogodo Uzochukwu Benjamin", role: "Cloud Engineer Contributor", firstName: "Ogodo" },
    { name: "Egbugo Ciracus Chukwuebuka", role: "Cloud Engineer Contributor", firstName: "Egbugo" }
  ];

  return (
    <div className="container mt-5 mb-5">
      {/* AeroBank Mission */}
      <div className="text-center mb-5 pb-4 border-bottom">
        <h1 className="fw-bold text-primary">About AeroBank</h1>
        <p className="lead text-muted mt-3 mx-auto" style={{ maxWidth: "800px" }}>
          AeroBank is a next-generation banking platform built as a capstone demonstration of 
          advanced cloud computing. Powered by a robust microservices architecture on Amazon EKS, 
          it ensures high availability, rapid CI/CD deployments, and enterprise-grade security.
        </p>
      </div>

      {/* Pod 5 Team Section */}
      <div className="text-center mt-5">
        <h2 className="mb-2 fw-bold">Meet DevOps Vanguard (Pod-5)</h2>
        <p className="text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
          The engineering team behind the architecture, deployment, and security of the AeroBank infrastructure.
        </p>
        
        <div className="row justify-content-center">
          
          {/* React Map Function: This loops through the array and builds a card for every person automatically */}
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img 
                  src={`/team-images/${member.firstName}.png`} 
                  className="card-img-top rounded-circle mx-auto mt-4" 
                  style={{ width: "120px", height: "120px", objectFit: "cover", border: "4px solid #f8f9fa" }}
                  alt={member.name}
                  onError={(e) => { e.target.src = `https://via.placeholder.com/150/cccccc/ffffff?text=${member.firstName}` }} 
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mt-2" style={{ fontSize: "1.1rem" }}>{member.name}</h5>
                  <h6 className="card-subtitle mb-3 text-primary" style={{ fontSize: "0.9rem" }}>{member.role}</h6>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AboutUs;