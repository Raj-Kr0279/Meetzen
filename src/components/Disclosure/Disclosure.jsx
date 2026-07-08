import React from "react";
import logo from "../../assets/meetzen.png";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import PageHeading from "../PageHeading";

const Disclosure = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="flex pt-4 pb-2 px-4 w-full justify-between items-center border-b">
    <div className='flex items-center font-semibold text-primary cursor-pointer' onClick={() => navigate("/dashboard")}>
        <MdArrowBackIosNew className=' text-2xlX font-normal' />
        <span className=' text-lg font-medium'>Back</span>
    </div>
    <div className='relative'>
        <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
        <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
    </div>

</div> */}
      <PageHeading label="Director's Disclosure" />
      <div className="bg-surface flex flex-col md:pe-10">
        <div className="flex justify-between items-center pb-4">
          <img src={logo} alt="" className="w-20 h-20" />
          <span className="text-base font-semibold text-foreground">
            Page 1/2
          </span>
        </div>
        <p className="text-base text-foreground font-semibold leading-loose">
          Lorem ipsum dolor sit amet consectetur. Bibendum fermentum aliquam
          sapien ornare volutpat amet. Lorem turpis vitae aliquam nunc. Platea
          in pharetra consectetur nulla fermentum dictum. Phasellus eget tellus
          morbi lorem leo feugiat lacus libero. Velit pellentesque aenean
          consectetur arcu massa sit viverra. Dui consectetur sapien varius
          integer. Magna lectus at pulvinar est erat dictumst tristique. Magna
          mus libero dui interdum est cursus. Blandit facilisi turpis nunc
          interdum neque at lectus elit pellentesque. Mattis amet ultrices ut
          vestibulum magna a donec ut. Accumsan lobortis elementum massa lectus
          morbi blandit facilisi. At lacinia commodo integer egestas. Congue
          dignissim et enim ac eu pulvinar interdum. Tellus quis sem vivamus
          posuere adipiscing convallis. In elit ipsum a arcu. Condimentum
          fermentum nullam leo etiam porttitor. Metus accumsan sit vestibulum
          nunc ut sit at nibh vivamus. Scelerisque lorem risus egestas lorem
          ipsum quis rhoncus tempus quam. Libero pellentesque proin sit vivamus
          quis eget. Odio elit metus turpis nisi hendrerit dignissim tincidunt.
          Egestas at diam purus at nibh. Et porttitor at faucibus aliquam
          accumsan ac. Morbi adipiscing nisl morbi in cursus eu ligula nec.
          Praesent risus morbi pellentesque ornare ante eu. Diam neque enim
          pellentesque sed facilisis eu purus pellentesque. Rhoncus sed arcu
          tempus ac egestas vulputate vulputate. Magna adipiscing augue vel
          ultrices accumsan non. Sagittis metus urna at sem dolor est sed
          viverra. Metus et aenean aliquet orci at pharetra. Enim arcu at dolor
          elementum odio. Porttitor placerat massa massa aliquet lacus. Purus
          facilisis sollicitudin ac arcu. Amet turpis sed fames in erat velit
          euismod. In curabitur hendrerit arcu nam ullamcorper auctor. Varius
          lectus molestie imperdiet vulputate. Turpis sit dolor mauris sit proin
          justo. Magnis in imperdiet purus suscipit mi nec eget. Semper nisl
          eleifend integer nunc sociis ridiculus quam. Eget sollicitudin vitae
          morbi semper facilisi quam rhoncus. Lacus et scelerisque et lorem
          elementum ac. Nulla placerat felis amet lectus. Nibh amet vel non eu
          quam est ipsum eu. Pulvinar in ut eget at. Adipiscing hendrerit dui
          felis dictum rhoncus nulla massa lectus. Cras neque lacus non ultrices
          vestibulum. Blandit in convallis non amet vitae pharetra venenatis.
          Dictum imperdiet nunc sit proin in. Erat quam eu cras platea sapien
          facilisi. Blandit magna id sit quis. Leo ultricies molestie enim
          dignissim dignissim ipsum urna porttitor non. Vel habitasse sit mauris
          leo. Habitasse sed vulputate eget aliquet. Aliquet vel lorem viverra
          sed nisi erat fringilla aliquam. Sit tortor adipiscing pellentesque
          imperdiet. Dolor volutpat diam mauris cras. Faucibus nulla nulla
          ullamcorper lacus nec posuere massa. Sed lacus mattis amet volutpat ut
          laoreet id. Risus orci interdum tortor
        </p>
      </div>
    </>
  );
};

export default Disclosure;
