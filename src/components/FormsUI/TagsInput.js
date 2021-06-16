import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=> ({
	root: { boxSizing: "border-box"},
	body: {
	  height: "100vh",
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "center",
	},
	tagsInput: {
	  display: "flex",
	  alignItems: "flex-start",
	  flexWrap: "wrap",
	  minHeight: "48px",
	  width: "480px",
	  padding: "0 8px",
	  border: "1px solid rgb(214, 216, 218)",
	  borderRadius: "6px",
	  "&:focus-within": { border: "1px solid #0052cc" },
	  input: {
		flex: 1,
		border: "none",
		height: "46px",
		fontSize: "14px",
		padding: "4px 0 0 0",
		"&:focus": { outline: "transparent" }
	  }
	},
	tags: {
	  display: "flex",
	  flexWrap: "wrap",
	  padding: "0",
	  margin: "8px 0 0 0"
	},
	tag: {
	  width: "auto",
	  height: "32px",
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "center",
	  color: "#fff",
	  padding: "0 8px",
	  fontSize: "14px",
	  listStyle: "none",
	  borderRadius: "6px",
	  margin: "0 8px 8px 0",
	  background: "#0052cc",
	  tagTitle: { marginTop: "3px" },
		tagCloseIcon: {
		display: "block",
		width: "16px",
		height: "16px",
		lineHeight: "16px",
		textAlign: "center",
		fontSize: "14px",
		marginLeft: "8px",
		color: "#0052cc",
		borderRadius: "50%",
		background: "#fff",
		cursor: "pointer"
	  }
	},
	"@media screen and (max-width: 567px)": {
	  tagsInput: { width: "calc(100vw - 32px)" }
	}
  }))

const TagsInput = props => {
	const classes = useStyles();
	const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	return (
		<div className={classes.tagsInput}>
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className={classes.tag}>
						<span className={classes.tag.tagTitle}>{tag}</span>
						<span className={classes.tag.tagCloseIcon}
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press enter to add tags"
			/>
		</div>
	);
};

export default TagsInput;