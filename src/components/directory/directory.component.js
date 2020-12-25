import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const DirectoryComponent = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionFields }) => (
            <MenuItem key={id} {...otherSectionFields} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(DirectoryComponent);
